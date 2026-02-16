"use client";

import {
  Combobox,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
} from "@/components/ui/combobox";
import { formats } from "@/config/formats";
import { useFileStore, useFormatStore } from "@/lib/zustand/stores";
import { ArrowBigRightDash } from "lucide-react";
import { useEffect } from "react";

const Picker = () => {
  const { from, to, setFrom, setTo } = useFormatStore();
  const { file } = useFileStore();

  useEffect(() => {
    if (!file) return;

    setFrom(file.type.split("/")[1]);
  }, [file]);

  return (
    <>
      <div className="flex items-center gap-3">
        <Combobox
          items={formats}
          value={from}
          onValueChange={(val) => {
            setFrom(val as string);
          }}
        >
          <ComboboxInput placeholder="Select a format" className="flex-1" />
          <ComboboxContent>
            <ComboboxEmpty>No formats found.</ComboboxEmpty>
            <ComboboxList>
              {(group, index) => (
                <ComboboxGroup key={index} items={group.formats}>
                  <ComboboxLabel className={"capitalize"}>
                    {group.type}
                  </ComboboxLabel>
                  <ComboboxCollection>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        .{item}
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                  {index < formats.length - 1 && <ComboboxSeparator />}
                </ComboboxGroup>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <ArrowBigRightDash />
        <Combobox
          items={formats}
          value={to}
          onValueChange={(val) => {
            setTo(val as string);
          }}
        >
          <ComboboxInput placeholder="Select a format" className="flex-1" />
          <ComboboxContent>
            <ComboboxEmpty>No formats found.</ComboboxEmpty>
            <ComboboxList>
              {(group, index) => (
                <ComboboxGroup key={index} items={group.formats}>
                  <ComboboxLabel className={"capitalize"}>
                    {group.type}
                  </ComboboxLabel>
                  <ComboboxCollection>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        .{item}
                      </ComboboxItem>
                    )}
                  </ComboboxCollection>
                  {index < formats.length - 1 && <ComboboxSeparator />}
                </ComboboxGroup>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </>
  );
};

export default Picker;

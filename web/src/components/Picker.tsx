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
import { Format } from "@/config/Interfaces";
import { formats } from "@/lib/formats";
import { useFormatStore } from "@/lib/zustand/stores";
import { ArrowBigRightDash } from "lucide-react";
import { useState } from "react";

const Picker = () => {
  const { from, to, setFrom, setTo } = useFormatStore();

  return (
    <>
      <div className="flex items-center gap-3">
        <Combobox
          items={formats}
          value={from}
          onValueChange={(value) => {
            setFrom(value!);
          }}
        >
          <ComboboxInput placeholder="Select a timezone" />
          <ComboboxContent>
            <ComboboxEmpty>No timezones found.</ComboboxEmpty>
            <ComboboxList>
              {(group, index) => (
                <ComboboxGroup key={index} items={group.items}>
                  <ComboboxLabel>{group.value}</ComboboxLabel>
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
          onValueChange={(value) => {
            setTo(value!);
          }}
        >
          <ComboboxInput placeholder="Select a timezone" />
          <ComboboxContent>
            <ComboboxEmpty>No timezones found.</ComboboxEmpty>
            <ComboboxList>
              {(group, index) => (
                <ComboboxGroup key={index} items={group.items}>
                  <ComboboxLabel>{group.value}</ComboboxLabel>
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

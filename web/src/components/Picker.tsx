"use client";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { useFormatStore } from "@/lib/zustand/stores";
import { ArrowBigRightDash } from "lucide-react";
import { useState } from "react";

const formats = ["png", "webp", "jpg"] as const;

const Picker = () => {
  const { from, to, setFrom, setTo } = useFormatStore();
  return (
    <>
      <div className="flex items-center gap-3">
        <Combobox
          items={formats}
          value={from}
          onValueChange={(value) => setFrom(value!)}
        >
          <ComboboxInput placeholder="Select Format" className={"flex-1"} />
          <ComboboxContent>
            <ComboboxEmpty>No formats found</ComboboxEmpty>
            <ComboboxList>
              {(format) => (
                <ComboboxItem key={format} value={format}>
                  {format}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <ArrowBigRightDash />
        <Combobox
          items={formats}
          value={to}
          onValueChange={(value) => setTo(value!)}
        >
          <ComboboxInput placeholder="Select Format" className={"flex-1"} />
          <ComboboxContent>
            <ComboboxEmpty>No formats found</ComboboxEmpty>
            <ComboboxList>
              {(format) => (
                <ComboboxItem key={format} value={format}>
                  {format}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </>
  );
};

export default Picker;

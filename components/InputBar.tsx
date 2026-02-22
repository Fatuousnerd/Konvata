"use client";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { CloudUpload, File, RotateCcw, X } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useFileStore, useFormatStore } from "@/lib/zustand/stores";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemTitle,
} from "./ui/item";
import { formatSize } from "@/lib/lib";

const InputBar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { file, setFile } = useFileStore();

  const handleClick = () => {
    if (!inputRef) return;
    inputRef.current?.click();
  };

  return (
    <>
      {!file ? (
        <Empty>
          <EmptyHeader className="border border-dashed border-foreground max-h-60 rounded-xl p-10">
            <EmptyMedia variant="icon">
              <CloudUpload />
            </EmptyMedia>
            <EmptyTitle>Konvata | Convert Files</EmptyTitle>
            <EmptyDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </EmptyDescription>
            <Button variant={"outline"} size={"sm"} onClick={handleClick}>
              Upload File
            </Button>
          </EmptyHeader>
          <EmptyContent>
            <Input
              type="file"
              ref={inputRef}
              onChange={(e) => setFile(e.target.files![0])}
              hidden
            />
          </EmptyContent>
        </Empty>
      ) : (
        <Item className="h-200 " variant={"muted"}>
          <ItemHeader>
            <Button
              onClick={() => {
                setFile(null);
                handleClick;
              }}
              variant={"outline"}
            >
              <RotateCcw /> Upload new file
            </Button>
            <Button onClick={() => setFile(null)} variant={"destructive"}>
              <X /> Cancel
            </Button>
          </ItemHeader>
          <ItemContent>
            <File size={150} />
          </ItemContent>
          <ItemFooter>
            <ItemTitle className="font-bold text-2xl">{file.name}</ItemTitle>
            <ItemDescription className="uppercase">
              {formatSize(file.size)} | {file.type.split("/")[0]} |{" "}
              {file.type.split("/")[1]}
            </ItemDescription>
          </ItemFooter>
        </Item>
      )}
    </>
  );
};

export default InputBar;

"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { CloudUpload } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

const InputBar = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (!inputRef) return;
    inputRef.current?.click();
  };

  const from = new FormData();

  return (
    <>
      {/* <InputGroup hidden>
        <InputGroupInput type="file" />
        <InputGroupAddon align={"inline-end"}>
          <InputGroupButton></InputGroupButton>
        </InputGroupAddon>
      </InputGroup> */}
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
          <Input type="file" ref={inputRef} hidden />
        </EmptyContent>
      </Empty>
    </>
  );
};

export default InputBar;

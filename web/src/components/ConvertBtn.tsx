"use client";

import { Button } from "./ui/button";
import { useFormatStore } from "@/lib/zustand/stores";

const ConvertBtn = () => {
  const { from, to } = useFormatStore();
  return (
    <>
      <Button disabled={!from || !to}>
        {from && to ? `Convert .${from} to .${to}` : "Convert files for FREE"}
      </Button>
    </>
  );
};

export default ConvertBtn;

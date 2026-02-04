import { Dispatch, SetStateAction } from "react";

export type ConversionReq = { file: File; from: string; to: string };

export type FormatStore = {
  from: string;
  to: string | null;
  setFrom: (f: string) => void;
  setTo: (t: string) => void;
};

export type Format = {
  type: "image" | "application/pdf" | "docs";
  formats: string[];
};

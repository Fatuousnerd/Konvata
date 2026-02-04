import { Dispatch, SetStateAction } from "react";

export type ConversionReq = { file: File; from: string; to: string };

export type FormatStore = {
  from: string | null;
  to: string | null;
  setFrom: (f: string) => void;
  setTo: (t: string) => void;
};

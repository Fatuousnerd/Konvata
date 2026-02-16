import { FileData } from "@ffmpeg/ffmpeg";

export interface ThemeType {
  theme: string;
  toggleTheme: () => void;
}

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

export interface FFReady {
  ready: boolean;
  setReady: (r: boolean) => void;
}

export type FileStore = {
  file: File | null;
  setFile: (f: File | null) => void;
};

export interface NewFile {
  newFile: FileData | null;
  setNew: (n: FileData) => void;
}

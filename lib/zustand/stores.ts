import { FFReady, FileStore, FormatStore, NewFile } from "@/config/Interfaces";
import { create } from "zustand";

export const useFormatStore = create<FormatStore>((set) => ({
  from: "webp",
  to: "png",
  setTo: (t) => set({ to: t }),
  setFrom: (f) => set({ from: f }),
}));

export const useFileStore = create<FileStore>((set) => ({
  file: null,
  setFile: (f) => set({ file: f }),
}));

export const useReady = create<FFReady>((set) => ({
  ready: false,
  setReady: (r) => set({ ready: r }),
}));

export const useNew = create<NewFile>((set) => ({
  newFile: null,
  setNew: (n) => set({ newFile: n }),
}));

import { FormatStore } from "@/config/Interfaces";
import { create } from "zustand";

export const useFormatStore = create<FormatStore>((set) => ({
  from: "webp",
  to: "png",
  setFrom: (f) => set({ from: f }),
  setTo: (t) => set({ to: t }),
}));

import { FormatStore } from "@/config/Interfaces";
import { create } from "zustand";

export const useFormatStore = create<FormatStore>((set) => ({
  from: null,
  to: null,
  setFrom: (f) => set({ from: f }),
  setTo: (t) => set({ to: t }),
}));

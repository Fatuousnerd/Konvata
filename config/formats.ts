export const formats = [
  {
    type: "image",
    formats: ["webp", "png", "jpg", "gif"],
  },
  {
    type: "video",
    formats: ["mp4"],
  },
  {
    type: "audio",
    formats: ["mp3", "wav"],
  },
] as const;

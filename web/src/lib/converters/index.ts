import { convertImage } from "./convertImage";

export async function convertFile(file: File, from: string, to: string) {
  const key = `${from}=>${to}`;

  switch (key) {
    case "png-webp":
      return convertImage(file, to);

    default:
      throw new Error("Unsupported conversion");
  }
}

import imageCompression from "browser-image-compression";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { file } = await req.json();

    const options = {
      fileType: "image/webp",
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const convertedBlob = await imageCompression(file, options);

    const convertedFile = new File(
      [convertedBlob],
      file.name.replace(/\.\w+$/, ".webp"),
      { type: "image/webp" },
    );

    return NextResponse.json(
      { file: convertedFile, success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error converting image... ", error);
    return NextResponse.json(
      { error: `Error converting image: ${error}`, success: false },
      { status: 500 },
    );
  }
}

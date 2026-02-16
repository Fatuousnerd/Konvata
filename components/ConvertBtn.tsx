"use client";

import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import {
  useFileStore,
  useFormatStore,
  useNew,
  useReady,
} from "@/lib/zustand/stores";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const ConvertBtn = () => {
  const { from, to } = useFormatStore();
  const { ready, setReady } = useReady();
  const { file } = useFileStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const load = async () => {
    const ffmpeg = new FFmpeg();
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  });

  const convert = async () => {
    if (!file) return;
    
    try {
      setLoading(true);

      const ffmpeg = new FFmpeg();
      await ffmpeg.load();
      ffmpeg.writeFile(`file.${from}`, await fetchFile(file!));
      await ffmpeg.exec(["-i", `file.${from}`, `newFile.${to}`]);
      
      const data = await ffmpeg.readFile(`newFile.${to}`);
      const uint8 = new Uint8Array(data as unknown as Uint8Array);
      const blob = new Blob([uint8], {
        type: `${file.type.split("/")[0]}/${file.type.split("/")[1]}`,
      });

      const url = URL.createObjectURL(blob);
      setFileUrl(url);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  const download = () => {
    if (!fileUrl) return;

    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = `newFile.${to}`;
    document.body.appendChild(a);
    a.click();

    URL.revokeObjectURL(fileUrl);
    a.remove();
    setFileUrl(null);
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <Button
          onClick={convert}
          className="flex-1"
          disabled={!from || !to || !ready || loading}
        >
          {!loading ? `Convert from .${from} to .${to}` : "Loading..."}
        </Button>
        {fileUrl && (
          <Button onClick={download} variant={"secondary"}>
            <Download /> Download
          </Button>
        )}
      </div>
    </>
  );
};

export default ConvertBtn;

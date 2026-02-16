import ConvertBtn from "@/components/ConvertBtn";
import InputBar from "@/components/InputBar";
import Picker from "@/components/Picker";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row items-stretch gap-3 p-10">
        <div
          className={cn(
            "-z-10 pointer-events-none absolute inset-0 bg-size-[40px_40px] select-none",
            "bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
        />
        <Spotlight
          className="-z-10 -top-40 left-7 md:-top-20 md:left-60"
          fill="grey"
        />
        <div className="flex flex-col items-start justify-center gap-4 flex-1">
          <h1 className="font-bold text-8xl">Konvata</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            inventore esse quo labore culpa consequuntur officia ipsam officiis
            excepturi in, est beatae exercitationem optio quis ipsum voluptas
            eveniet corporis corrupti.
          </p>
        </div>
        <div className="flex flex-col items-stretch flex-1 gap-3">
          <InputBar />
          <Picker />
          <ConvertBtn />
        </div>
      </div>
    </>
  );
}
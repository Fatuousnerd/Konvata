import { convertFile } from "@/lib/converters";

export async function POST(req: Request) {
  const form = await req.formData();
  const file = form.get("file") as File;
  const from = form.get("from") as string;
  const to = form.get("to") as string;

  if (!file || !from || !to)
    return new Response("Invalid request", { status: 400 });

  const result = await convertFile(file, from, to);

  //   return new Response(result, {
  //     header: {
  //       "Content-Type": result.type,
  //       "Content-Disposition": `attachment; filename="converted.${to}"`,
  //     },
  //   });
  return new Response("Converted");
}

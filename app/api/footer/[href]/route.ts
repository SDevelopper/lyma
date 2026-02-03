import { footer } from "@/features/helper/footer/footer";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ href: string }> }) {
  
  const { href } = await params;
  const item = footer
    .flatMap(section => section.links)
    .find(link => link.href === `/footer/${href}`);

  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(item);
}
import { footer } from "@/features/helper/footer/footer";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(footer)
}
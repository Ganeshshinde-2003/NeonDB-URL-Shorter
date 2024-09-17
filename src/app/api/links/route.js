import isValidURL from "@/app/lib/validateURL";
import { NextResponse } from "next/server";
import { addLink } from "@/app/lib/db";

export async function POST(request) {
  //   const formData = await request.formData();
  //   console.log(formData);

  const contentType = await request.headers.get("content-type");
  if (contentType !== "application/json") {
    return NextResponse.json(
      { message: "Invalid content type" },
      { status: 400 }
    );
  }
  const data = await request.json();
  const url = data && data.url ? data.url : null
  const validURL = await isValidURL(url, [process.env.NEXT_PUBLIC_VERCEL_URL]);

  if (!validURL) {
    return NextResponse.json({ message: "Invalid URL" }, { status: 400 });
  }

  const dbResponse = await addLink(url);
  return NextResponse.json(dbResponse, { status: 201 });
}

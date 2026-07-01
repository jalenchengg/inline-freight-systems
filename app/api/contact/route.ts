import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/email";

export async function POST(req: Request) {
  const data = await req.json();

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendNotification({
      subject: `Contact form: ${data.subject || data.name}`,
      replyTo: data.email,
      lines: {
        Name: data.name,
        Email: data.email,
        Subject: data.subject,
        Message: data.message,
      },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
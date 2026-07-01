import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/email";

export async function POST(req: Request) {
  const data = await req.json();

  if (!data.name || !data.email || !data.origin || !data.destination) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendNotification({
      subject: `Quote request: ${data.origin} → ${data.destination} (${data.mode})`,
      replyTo: data.email,
      lines: {
        Mode: data.mode,
        Name: data.name,
        Company: data.company,
        Email: data.email,
        Phone: data.phone,
        Origin: data.origin,
        Destination: data.destination,
        "Weight (lbs)": data.weight,
        "Pieces/Pallets": data.pieces,
        "Ready date": data.ready,
        Details: data.details,
      },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Quote email failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

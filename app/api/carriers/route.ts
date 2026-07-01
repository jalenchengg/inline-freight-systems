import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/email";

export async function POST(req: Request) {
  const data = await req.json();

  if (!data.company || !data.contact || !data.email || !data.mc || !data.dot) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await sendNotification({
      subject: `Carrier application: ${data.company} (MC-${data.mc})`,
      replyTo: data.email,
      lines: {
        Company: data.company,
        Contact: data.contact,
        Email: data.email,
        Phone: data.phone,
        Equipment: Array.isArray(data.equipment) ? data.equipment.join(", ") : data.equipment,
        "Lanes/Notes": data.lanes,
      },
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Carrier email failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
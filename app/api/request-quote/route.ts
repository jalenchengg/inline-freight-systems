import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, companyName, message } = body;

    const response = await resend.emails.send({
      from: "Inline FSI Team <contact@inlinefsi.com>", // must be a verified sender domain
      to: "couls4566@gmail.com", // where you want to receive the quote request
      subject: "New Quote Request",
      text: `
New Quote Request:

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${companyName}
Message: ${message || "None"}
      `,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

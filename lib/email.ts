import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const INBOX = process.env.QUOTE_INBOX!;

const FROM = "Inline Freight Systems <quote@inlinefsi.com>";

export async function sendNotification(opts: {
  subject: string;
  replyTo?: string;
  lines: Record<string, unknown>;
}) {
  const html = Object.entries(opts.lines)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(
      ([k, v]) =>
        `<p style="margin:0 0 8px"><strong>${k}:</strong> ${String(v).replace(/\n/g, "<br/>")}</p>`
    )
    .join("");

  const { error } = await resend.emails.send({
    from: FROM,
    to: INBOX,
    replyTo: opts.replyTo,
    subject: opts.subject,
    html: `<div style="font-family:sans-serif;font-size:14px">${html}</div>`,
  });

  if (error) throw new Error(error.message);
}
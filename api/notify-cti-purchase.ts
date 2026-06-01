import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, amount, product } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);

  try {
    await resend.emails.send({
      from: "Career Bridge <noreply@careerbridgefoundation.com>",
      to: "support@careerbridgefoundation.zohodesk.eu",
      subject: `New enrolment — ${product}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
          <h2 style="margin-bottom: 24px; font-size: 20px;">New Portfolio Enrolment</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 140px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">Product</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${product}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600;">Amount paid</td>
              <td style="padding: 10px 0;">${amount}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Failed to send notification email" });
  }
}

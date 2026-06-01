import Stripe from "stripe";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: process.env.STRIPE_CTI_PRICE_ID!,
          quantity: 1,
        },
      ],
      success_url: `${process.env.SITE_URL}/portfolio-simulations/cyber-threat-intelligence?success=1`,
      cancel_url: `${process.env.SITE_URL}/portfolio-simulations/cyber-threat-intelligence#pricing`,
    });

    return res.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return res.status(500).json({ error: "Failed to create checkout session" });
  }
}

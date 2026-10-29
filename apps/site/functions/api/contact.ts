/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Disabled until configured. To enable:
 *   1. Create a Turnstile widget; put its site key in src/site.config.ts and set contact.enabled = true.
 *   2. wrangler pages secret put TURNSTILE_SECRET_KEY
 *   3. wrangler pages secret put CONTACT_WEBHOOK_URL   (where messages are delivered, e.g. an email/chat webhook)
 *   4. Set CONTACT_ENABLED = "true" in wrangler.toml [vars] (or the Pages dashboard).
 */

interface Env {
  CONTACT_ENABLED?: string;
  TURNSTILE_SECRET_KEY?: string;
  CONTACT_WEBHOOK_URL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const field = (form: FormData, name: string, max: number): string | null => {
  const value = form.get(name);
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 && trimmed.length <= max ? trimmed : null;
};

export async function onRequestPost({ request, env }: PagesContext): Promise<Response> {
  if (env.CONTACT_ENABLED !== "true" || !env.TURNSTILE_SECRET_KEY || !env.CONTACT_WEBHOOK_URL) {
    return json({ ok: false, error: "Contact form is not configured." }, 503);
  }

  const form = await request.formData();
  const name = field(form, "name", 100);
  const email = field(form, "email", 200);
  const message = field(form, "message", 4000);
  const token = field(form, "cf-turnstile-response", 2048);
  if (!name || !email || !email.includes("@") || !message || !token) {
    return json({ ok: false, error: "Please fill in every field." }, 400);
  }

  const verify = new FormData();
  verify.append("secret", env.TURNSTILE_SECRET_KEY);
  verify.append("response", token);
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) verify.append("remoteip", ip);
  const outcome = (await (
    await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: verify })
  ).json()) as { success: boolean };
  if (!outcome.success) return json({ ok: false, error: "Verification failed. Please try again." }, 403);

  const delivered = await fetch(env.CONTACT_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });
  if (!delivered.ok) return json({ ok: false, error: "Could not send right now." }, 502);

  return json({ ok: true });
}

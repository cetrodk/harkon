# Harkon Byggerådgivning

Website for Harkon Byggerådgivning — professionel byggerådgivning i Nykøbing Falster.

**Stack:** Vite + React 19 + Tailwind CSS v4 + Framer Motion

**Deployed on:** [Vercel](https://harkon.vercel.app)

## Local development

```bash
npm install
npm run dev
```

## Contact form (Resend)

The contact form sends email notifications via [Resend](https://resend.com) through a Vercel serverless function at `api/contact.ts`.

**Setup:**

1. Create a [Resend API key](https://resend.com/api-keys)
2. Add your sending domain in Resend (e.g. `harkon.dk`)
3. Set `RESEND_API_KEY` in Vercel project settings → Environment Variables

## Environment variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for contact form emails |

## Deployment

Deploys automatically to Vercel on push to `main`.

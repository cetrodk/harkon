import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Navn, email og besked er påkrævet.' });
  }

  try {
    await resend.emails.send({
      from: 'Harkon Kontaktformular <noreply@harkon.dk>',
      to: 'brian@harkon.dk',
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      html: `
        <h2>Ny henvendelse fra harkon.dk</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Ikke oplyst'}</p>
        <hr />
        <p><strong>Besked:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Kunne ikke sende besked.' });
  }
}

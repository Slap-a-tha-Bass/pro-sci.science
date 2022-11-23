import { NextApiRequest, NextApiResponse } from 'next';
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, message } = req.body;
  const content = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;

  const data = {
    to: 'yarar-fisher.1@osu.edu',
    from: 'hello@pro-sci.science',
    subject: 'New Message from Contact Form',
    text: content,
    html: content.replace(/\r\n/g, '<br>'),
  };
  mail.send(data);
  res.status(200).json({ status: 'OK' });
};

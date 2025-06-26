import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// CORS Middleware
const cors = Cors({
  origin: "*", // Allow all origins
  methods: ["GET"],
});

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  const { id, status, email, name } = req.query;

  if (!id || !status || !email || !name) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: email,
    subject: `Your Inquiry Has Been ${status === "accepted" ? "Accepted" : "Rejected"}`,
    text: `Hello ${name},\n\nYour inquiry with ID ${id} has been ${status}.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.redirect(302, "/");
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

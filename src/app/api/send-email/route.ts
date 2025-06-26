import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { render } from "@react-email/render"; // ✅ Converts React component to HTML
import { EmailTemplates } from "@/components/email-template";
import { v4 as uuidv4 } from "uuid"; // ✅ Generate random inquiryId

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const inquiryId = uuidv4(); // Generate a unique inquiryId

     // Render the email template as HTML
     const emailHtml = await render(EmailTemplates({ name, email, message, inquiryId }));

    // // ✅ Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    // ✅ Configure Nodemailer SMTP with Gmail
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL, // ⚠️ Replace with your Gmail
        pass: process.env.SMTP_PASSWORD, // ⚠️ Use App Password (not your real password)
      },
    });

  
    // ✅ Email Options
    let mailOptions = {
      from: `"Contact Form" <your-email@gmail.com>`, // ⚠️ Replace with your email
      to: "kumaraditya5297@gmail.com", // ⚠️ Your receiving email
      subject: "New Contact Form Message",
      html: emailHtml,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

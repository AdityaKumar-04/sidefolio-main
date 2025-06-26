import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const inquiryId = searchParams.get("id");
    const status = searchParams.get("status");
    const userEmail = searchParams.get("email");
    const userName = searchParams.get("name");

    if (!inquiryId || !status || !userEmail || !userName) {
      return NextResponse.json({ success: false, error: "Invalid parameters" }, { status: 400 });
    }

    // Define email subject & message
    const subject = status === "accepted" ? "Your Inquiry Was Accepted" : "Your Inquiry Was Rejected";
    const message =
      status === "accepted"
        ? `Dear ${userName},\n\nYour inquiry has been accepted. We will get back to you soon.\n\nBest regards,`
        : `Dear ${userName},\n\nUnfortunately, your inquiry has been rejected. Please contact us for more details.\n\nBest regards,`;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: userEmail,
      subject,
      text: message,
    });

    // Redirect user to home page
    return NextResponse.redirect(new URL("/", req.url));

  } catch (error) {
    console.error("Error handling inquiry:", error);
    return NextResponse.json({ success: false, error: "Failed to process inquiry" }, { status: 500 });
  }
}

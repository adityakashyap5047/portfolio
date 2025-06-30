import nodemailer from "nodemailer";

import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    // Validate the form data
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !message
    ) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    //authentication the credentials of user
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "",
      text: `
        Dear Support Team,

        I hope this message finds you well. My name is ${firstName} ${lastName}, and I am reaching out to you regarding the following:
        Category:- ${phone} ${phone === "others" ? `- ${message}` : ""}
    
        Please feel free to reach out to me if further information is required. I look forward to your response at your earliest convenience.
    
        Best regards,
        ${firstName} ${lastName}
        ${email}
      `,
      html: `
        <p>Dear Support Team,</p>

        <p>I hope this message finds you well. My name is <strong>${firstName} ${lastName}</strong>, and I am reaching out to you regarding the following:</p>
        <p><strong>Category:-</strong> ${phone} ${phone === "others" ? "- "+message  : ""}</p>
    
        <p>Please feel free to reach out to me if further information is required. I look forward to your response at your earliest convenience.</p>
    
        <br/>
    
        <p>Best regards,</p>
        <p><strong>${firstName} ${lastName}</strong></p>
        <p>${email}</p>
      `,
    };
    

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json({message: "Message sent successfully!!!"}, {status: 200})
  } catch (error) {
    console.log("error while sending the Feedback", error);
    return Response.json({message: 'An unexpected error occurred. Please try again later.'}, {status: 500});
  }
}
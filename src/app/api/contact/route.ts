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
      subject: `New message from ${firstName} ${lastName} via portfolio form`,
      text: `
        Hi Aditya,

        You've received a new message through your portfolio website.

        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone No.: ${phone}
        Message: ${message}

        Feel free to follow up with them directly.

        Regards,  
        Portfolio Website Bot
        `,

      html: `
        <p>Hi Aditya,</p>

        <p>You’ve received a new message through your <strong>portfolio website contact form</strong>.</p>

        <h4>Contact Details:</h4>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
          <li><strong>Category:</strong> ${phone}</li>
          <li><strong>Message:</strong><br/>${message}</li>
        </ul>

        <p>You can reply directly to their email if needed.</p>

        <br/>
        <p>Regards,</p>
        <p><em>Portfolio Website Bot</em></p>
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
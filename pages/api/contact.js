const nodemailer = require("nodemailer");

export default async function handler(req, res) {
    const { name, email, subject, message } =
      req.body;
  
    // SEND EMAIL NOTIFICATION
    let transporter = nodemailer.createTransport({
      host: "outlook.office365.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "jared@asrpromedia.com",
        pass: process.env.OUTLOOK_PASSWORD,
      },
    });
  
    await transporter.sendMail({
      from: `"Jared's Website" <jared@asrpromedia.com>`, // sender address
      to: "jfromupthewayproductions@gmail.com", // reciever
      subject: "New Website Lead!", // Subject line
      html: `
            <p>From: ${name}</p>
            <p>Email: ${email}</p>
            <p>Subject: ${subject}</p>
            <p>Message: ${message}</p>
            </body>
              `, // html body
    });

  }
"use strict";
const nodemailer = require("nodemailer");

exports.main_handler = async (event, context) => {
  var email = {
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    from: process.env.EMAIL_FROM,
  };
  const transport = nodemailer.createTransport(email.smtp);
  transport
    .verify()
    .then(() => console.log("Connected to email server"))
    .catch((err) => console.log(err));

  let body = JSON.parse(event.body);
  let { key } = body;
  if (key == process.env.EMAIL_SECRET_KEY) {
    const msg = {
      from: email.from,
      to: body.email.to,
      subject: body.email.subject,
    };
    if (body.email.text) {
      msg.text = body.email.text;
    }
    if (body.email.html) {
      msg.html = body.email.html;
    }
    let m = await transport.sendMail(msg);

    return m;
  } else {
    return {};
  }
};

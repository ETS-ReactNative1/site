import Cors from "cors";
import initMiddleware from "@/lib/init-middleware";
import { sendEmail } from "@/lib/emailer";

import { isValidJson } from "@/utils/is-valid-json";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with  POST and OPTIONS
    methods: ["POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  const email = isValidJson(req?.body)
    ? JSON.parse(req?.body).email
    : req?.body?.email;
  if (!email) {
    console.log("email.js -- no email found", req?.body);
    return res.status(404).json({ message: "no email provided to /email" });
  }

  if (req.method === "POST") {
    console.log("transporting");
    let mailObj = {
      from: '"G. Shah Dev" <gaurang.r.shah@gmail.com>', // sender address
      recipients: [email], // comma-separated list of receivers
      subject: " ♻️  G. Shah Dev - Please Verify Your Email", // Subject line
      message: `<b>Thank you for subscribing!</b> <p>Please <a href="${process.env.NEXT_PUBLIC_API_URL}/verify?email=${email}" target="_blank">verify your email</a> </p>`,
    };

    await sendEmail(mailObj);
    console.log("email sent", JSON.stringify(mailObj));

    res.json({
      message: `We've sent a verfication email to: ${email}`,
    });
  } else {
    res.status(200).json({ message: `Response from /api/emails.` });
  }
}

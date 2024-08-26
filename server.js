const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router); // Register router here

app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.REACT_APP_EMAIL_AUTH,
    pass: process.env.REACT_APP_PASS_AUTH
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Define route here
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message} = req.body;
  const name = firstName + ' ' + lastName;
  const mail = {
    from: name,
    to: process.env.REACT_APP_EMAIL_AUTH,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
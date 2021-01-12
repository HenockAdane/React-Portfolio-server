const nodemailer = require("nodemailer")


const transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });


const SendMail = (res, subject, recievers, html) => {
    transporter.sendMail({
        from: `<${process.env.USER}>`, // sender address
        to: recievers, // list of receivers
        subject: subject, // Subject line
        html: html, // html body
      }).then(dataa => {

        res.status(200).send({message: "Message Has Been Sent Successfully"})
          
          console.log("Message sent: %s", dataa.messageId);
      }).catch(err => {
        console.log(err)
        res.status(404)
      })
}


module.exports = SendMail
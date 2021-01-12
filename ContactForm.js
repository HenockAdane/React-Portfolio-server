const SendMail = require("./SendMail")


const ContactForm = (app) => {

    app.post("/contactForm", (req,res) => {
        const {name, email, message} = req.body

        let formsHtml = `
        <p>Name: ${name}</p>
        <p>Email: ${email}<p>
        <p>Message: ${message}</p>`
        SendMail(res, `Contact Form: ${name}`, "hiieofbnhacxezwfaf@niwghx.com", formsHtml)
    })
}

module.exports = ContactForm
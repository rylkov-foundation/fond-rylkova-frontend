const bodyParser = require('body-parser')
const app = require('express')()
const nodemailer = require('nodemailer')

app.use(bodyParser.json())

app.post('/send',
  (req, res) => {
    const { subject, text, name, email } = req.body
    const transporter = nodemailer.createTransport(
      {
        host: process.env.MAIL_SMTP,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
          user: process.env.MAIL_LOGIN,
          pass: process.env.MAIL_PASSWORD
        }
      }
    )
    transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO,
      subject,
      text: `from: ${email} \n${text}`
    })
      .then(() => res.status(200).send())
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }
)

module.exports = app

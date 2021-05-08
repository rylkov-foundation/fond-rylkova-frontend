require('dotenv').config()
const bodyParser = require('body-parser')
const app = require('express')()
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')

app.use(bodyParser.json())
app.post('/donations',
  (req, res) => {
    axios.post(
      'https://api.yookassa.ru/v3/payments',
      {
        amount: {
          value: String(req.body.amount),
          currency: process.env.CURRENCY
        },
        capture: true,
        payment_method_data: {
          type: req.body.paymentType
        },
        confirmation: {
          type: 'redirect',
          return_url: process.env.REDIRECT_URL
        },
        description: process.env.DESCRIPTION,
        save_payment_method: req.body.isRegularPayment
      },
      {
        headers: {
          'Idempotence-Key': uuidv4()
        },
        auth: {
          username: process.env.SHOP_ID,
          password: process.env.SECRET_KEY
        }
      }
    )
      .then((payment) => {
        res.status(200).send({ ok: true, url: payment.data.confirmation.confirmation_url })
      })
      .catch((err) => {
        res.status(500).send({ ok: false, message: 'something went wrong =(' })
      })
  }
)

app.post('/results',
  (req, res) => {
    console.log(req)
    res.status(200).send({ ok: true })
  }
)

module.exports = app

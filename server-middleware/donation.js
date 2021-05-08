require('dotenv').config()
const bodyParser = require('body-parser')
const app = require('express')()
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const mongoose = require('mongoose')
const logger = require('../utilites/logger')
const Donation = require('../models/regular_donation')

const {
  DB_HOST = 'localhost',
  DB_PORT = 27017,
  DB_NAME = 'fardonation'
} = process.env

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
        logger.log('error', 'Ошибка: %s', err)
        res.status(500).send({ ok: false, message: 'something went wrong =(' })
      })
  }
)

app.post('/results',
  (req, res) => {
    if (
      req.body?.object?.status === 'succeeded' &&
      req.body?.object?.payment_method?.saved === true &&
      req.body?.object?.payment_method?.id &&
      req.body?.object?.amount?.value
    ) {
      mongoose.connect(
        `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
        {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        })
        .then(() => {
          Donation.create({ id: req.body.object.payment_method.id, amount: req.body.object.amount.value })
            .then(() => res.status(200).send({ ok: true }))
            .catch(err => logger.log('error', 'Ошибка: %s', err))
          return mongoose.disconnect()
        })
        .catch(err => logger.log('error', 'Ошибка: %s', err))
    } else {
      res.status(400).send({ ok: false })
    }
  }
)

module.exports = app

require('dotenv').config()
const mongoose = require('mongoose')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const Donation = require('../models/regular_donation')
const logger = require('../utilites/logger')

const {
  DB_HOST = 'localhost',
  DB_PORT = 27017,
  DB_NAME = 'fardonation',
  PAYMENT_GATEWAY
} = process.env

export default function regularDonationCronTask () {
  mongoose.connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(() => {
      Donation.find({})
        .then((donations) => {
          donations.forEach((donation) => {
            if (
              (
                donation.firstPayment.getDate() < 28 &&
                ((new Date()) - donation.firstPayment) >= 2419200000 &&
                (new Date()).getDate() === donation.firstPayment.getDate()
              ) || (
                donation.firstPayment.getDate() >= 28 &&
                ((new Date()) - donation.firstPayment) >= 2419200000 &&
                (new Date()).getDate() === 1
              )
            ) {
              axios.post(
                PAYMENT_GATEWAY,
                {
                  amount: {
                    value: String(donation.amount),
                    currency: process.env.CURRENCY
                  },
                  capture: true,
                  payment_method_id: donation.id,
                  description: `next regular payment from: ${donation.name} ${donation.email}`,
                  metadata: {
                    type: 'next regular payment'
                  }
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
                .catch((err) => {
                  logger.log('error', 'Ошибка: %s', JSON.stringify(err))
                })
            }
          })
        })
    })
    .catch(err => logger.log('error', 'Ошибка: %s', JSON.stringify(err)))
}

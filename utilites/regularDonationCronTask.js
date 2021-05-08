require('dotenv').config()
const mongoose = require('mongoose')
const Donation = require('../models/regular_donation')
const logger = require('../utilites/logger')

const {
  DB_HOST = 'localhost',
  DB_PORT = 27017,
  DB_NAME = 'fardonation'
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
        .then(donations => console.log(donations))
    })
    .catch(err => logger.log('error', 'Ошибка: %s', JSON.stringify(err)))
}

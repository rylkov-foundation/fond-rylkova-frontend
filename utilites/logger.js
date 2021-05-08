const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: './logs/donation.log',
      level: 'info',
      format: winston.format.json()
    })
  ]
})

module.exports = logger

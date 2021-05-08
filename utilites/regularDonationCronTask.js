const Donation = require('../models/regular_donation')

export default function regularDonationCronTask () {
  console.log('***regularDonationCronTask***')
  Donation.find({})
    .then(donations => console.log(donations))
}

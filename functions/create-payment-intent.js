const { calculateNewValue } = require('@testing-library/user-event/dist/utils')

//domain/.netlify/functions/create-payment-intent
require('dotenv').config()

const stripe = require('stripe')(
  'sk_test_51MfJ0BSJYE23cJsyDkLfL52n5agJpnxPsV0mDjiyOfUolxawktQikyicaiEGUBSjW33IpuYFLT0a8T4oCjfIQdT300OxHpRBFM'
)

exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body)

    const calculateOrderAmount = () => {
      return total_amount + shipping_fee
    }
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: 'usd',
      })
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      }
    }
  }
  return {
    statusCode: 200,
    body: 'create payment intent',
  }
}

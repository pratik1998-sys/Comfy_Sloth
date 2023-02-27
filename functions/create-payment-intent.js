const express = require('express')
const app = express()
// This is your test secret API key.
const stripe = require('stripe')(
  'sk_test_51MfJ0BSJYE23cJsyDkLfL52n5agJpnxPsV0mDjiyOfUolxawktQikyicaiEGUBSjW33IpuYFLT0a8T4oCjfIQdT300OxHpRBFM'
)

app.use(express.static('public'))
app.use(express.json())

const calculateOrderAmount = (shipping_fee, total_amount) => {
  return shipping_fee + total_amount
}

app.post('/functions/create-payment-intent', async (req, res) => {
  console.log(req)
  const { cart, shipping_fee, total_amount } = req.body
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(shipping_fee + total_amount),
    currency: 'usd',
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
})

app.listen(4242, () => console.log('Node server listening on port 4242!'))

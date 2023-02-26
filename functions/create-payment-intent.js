//domain/.netlify/functions/create-payment-intent

exports.handler = async function (event, context) {
  const { cart, shipping_fee, total_amount } = JSON.parse(event)
  console.log(cart)

  if (event.body) {
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    }
  }
  return {
    statusCode: 200,
    body: 'create payment intent',
  }
}

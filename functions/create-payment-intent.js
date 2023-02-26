//domain/.netlify/functions/create-payment-intent

exports.handler = async function (event, context) {
  //const { cart, shipping_fee, total_amount } = JSON.parse(event)
  //console.log(JSON.parse(event))

  // if (event.body) {
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(JSON.parse(event).body.cart),
  //   }
  // }
  return {
    statusCode: 200,
    body: JSON.stringify(JSON.parse(event).body.cart),
  }
}

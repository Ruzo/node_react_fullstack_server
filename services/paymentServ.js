const stripeKey = require( '../config/keys' ).stripe.secretKey;
const stripe = require( 'stripe' )( stripeKey );

module.exports = async ( transaction ) => {
  const charge = await stripe.charges.create( {
    amount: 500,
    currency: 'usd',
    source: transaction.id,
    description: 'Charge for 5 credits'
  } );

  return charge;
}
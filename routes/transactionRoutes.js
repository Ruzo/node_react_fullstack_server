const paymentServ = require( '../services/paymentServ' );
const { recordCreditsSale } = require( '../data' );

module.exports = ( app ) => {
  app.post( '/api/stripe/payment', async ( req, res ) => {
    const transaction = req.body;
    const charge = await paymentServ( transaction );

    updatedUser = await recordCreditsSale( req.user, 5, charge );
    res.send( { updatedUser, charge } );
  } )
}
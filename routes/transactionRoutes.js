const paymentServ = require( '../services/paymentServ' );
const { recordCreditsSale } = require( '../data' );
const requireLogin = require( '../middlewares/requireLogin' );

module.exports = ( app ) => {
  app.post( '/api/payment', requireLogin, async ( req, res ) => {
    const transaction = req.body;
    const charge = await paymentServ( transaction );

    updatedUser = await recordCreditsSale( req.user, 5, charge );
    res.send( { updatedUser, charge } );
  } )
}
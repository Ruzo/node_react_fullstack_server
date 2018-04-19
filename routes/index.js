
module.exports = ( app, passport ) => {
  require( './authRoutes' )( app, passport );
  require( './transactionRoutes' )( app );
}
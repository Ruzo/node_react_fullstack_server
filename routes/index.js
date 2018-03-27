module.exports = ( app, passport ) => {
  app.get( '/', function ( req, res ) {
    res.send( { hello: 'world!' } );
  } );

  app.get( '/login_error', ( req, res ) => res.send( { error: 'There was an error login in!' } ) );
  app.get( '/success', ( req, res ) => res.send( { login: 'Success!' } ) );



  app.get( '/auth/google', passport.authenticate( 'google', {
    scope: [ 'profile', 'email' ]
  } )
  );

  app.get( '/auth/google/callback',
    passport.authenticate( 'google', { failureRedirect: '/login_error' } ), ( req, res ) => {
      res.redirect( '/success' );
    } );
}
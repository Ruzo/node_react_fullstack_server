module.exports = ( app, passport ) => {
  app.get( '/', function ( req, res ) {
    res.send( { hello: 'world!' } );
  } );

  app.get( '/login_error', ( req, res ) => res.send( { error: 'There was an error login in!' } ) );
  app.get( '/success', ( req, res ) => res.send( { login: 'Success!' } ) );
  app.get( '/current_user', ( req, res ) => res.send( req.user ) );
  app.get( '/logout', ( req, res ) => {
    req.logout();
    res.send( {
      loggedOut: req.user ? false : true,
      current_user: req.user
    } );
  } );



  app.get( '/auth/google', passport.authenticate( 'google', {
    scope: [ 'profile', 'email' ]
  } )
  );

  app.get( '/auth/google/callback',
    passport.authenticate( 'google', { failureRedirect: '/login_error' } ), ( req, res ) => {
      res.redirect( '/success' );
    } );
}
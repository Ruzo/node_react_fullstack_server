const clog = console.log;

module.exports = ( app, passport ) => {
  app.get( '/api/home', function ( req, res ) {
    clog( req );
    res.send( { user: req.user } );
  } );

  app.get( '/api/login_error', ( req, res ) => res.send( { error: 'There was an error login in!' } ) );
  app.get( '/api/success', ( req, res ) => res.send( { login: 'Success!' } ) );
  app.get( '/api/current_user', ( req, res ) => {
    clog( 'REQ inside current_user: ', req.user );
    res.send( req.user || {} );
  } );
  app.get( '/api/logout', ( req, res ) => {
    req.logout();
    res.redirect( '/' );
  } );



  app.get( '/api/auth/google', passport.authenticate( 'google', {
    scope: [ 'profile', 'email' ]
  } )
  );

  app.get( '/api/auth/google/callback',
    passport.authenticate( 'google', { failureRedirect: '/api/login_error' } ), ( req, res ) => {
      res.redirect( '/' );
    } );
}
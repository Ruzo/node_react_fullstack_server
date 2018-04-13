const clog = console.log;

module.exports = ( app, passport ) => {

  app.get( '/api/login_error', ( req, res ) => res.send( {
    user: {},
    error: 'There was an error login in!'
  } ) );

  app.get( '/api/current_user', ( req, res ) => {
    // clog( 'REQ inside current_user: ', req.user );
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
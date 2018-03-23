const express = require( 'express' );

const app = express();

app.get( '/', function ( req, res ) {
  res.send( { hello: 'world!' } );
} );

app.get( '/auth/google', passport.authenticate( 'google', {
  scope: [ 'profile', 'email' ]
} )
);

app.get( '/auth/google/callback',
  passport.authenticate( 'google', { failureRedirect: '/' } ),
  function ( req, res ) {
    console.log( 'Authentication Success!' );
    res.redirect( '/' );
  }
);
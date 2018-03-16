const express = require( 'express' );
const passport = require( 'passport' );
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
const keys = require( './config/keys' );

const app = express();

passport.use( new GoogleStrategy( {
  clientID: keys.googleWebOauth.client_id,
  clientSecret: keys.googleWebOauth.client_secret,
  callbackURL: '/auth/google/callback'
},
  ( accessToken ) => console.log( accessToken )
)
);

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

const PORT = process.env.PORT || 5000;
console.log( 'Listening on port ', PORT );
app.listen( PORT );

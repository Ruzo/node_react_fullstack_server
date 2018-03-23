const passport = require( 'passport' );
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;

const keys = require( '../config/keys' );

passport.use( new GoogleStrategy( {
  clientID: keys.googleWebOauth.client_id,
  clientSecret: keys.googleWebOauth.client_secret,
  callbackURL: '/auth/google/callback'
},
  ( accessToken ) => console.log( accessToken )
)
);

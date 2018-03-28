const express = require( 'express' );
const app = express();
const cookieSession = require( 'cookie-session' );
const passport = require( 'passport' );
const keys = require( './config/keys' );
require( './services/passportServ' )( passport );

app.use( cookieSession( {
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [ keys.cookieKey ]
} ) );
app.use( passport.initialize() );
app.use( passport.session() );
require( './routes' )( app, passport );

const PORT = process.env.PORT || 5000;
console.log( 'Listening on port ', PORT );
app.listen( PORT );

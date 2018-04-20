const express = require( 'express' );
const app = express();
const cookieSession = require( 'cookie-session' );
const passport = require( 'passport' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );
const keys = require( './config/keys' );

require( './services/passportServ' )( passport );

app.use( bodyParser.json() );
app.use( cookieSession( {
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [ keys.cookieKey ]
} ) );
app.use( passport.initialize() );
app.use( passport.session() );

require( './routes' )( app, passport );

if ( process.env.NODE_ENV === 'production' ) {
  console.log( 'IN PRODUCTION MODE!' );

  // Serve up production assets from build folder
  app.use( express.static( path.join( __dirname, '/client/build' ) ) );

  // Send index.html when route is not recognized
  app.get( '*', ( req, res ) => {
    res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) );
  } );
}

const PORT = process.env.PORT || 5000;
console.log( 'Listening on port ', PORT );
app.listen( PORT );

const express = require( 'express' );
const app = express();
const passport = require( 'passport' );
require( './services/passportServ' )( passport );

app.use( passport.initialize() );
app.use( passport.session() );
require( './routes' )( app, passport );

const PORT = process.env.PORT || 5000;
console.log( 'Listening on port ', PORT );
app.listen( PORT );

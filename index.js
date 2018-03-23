require( './services/passportServ' );
const express = require( 'express' );
const app = express();
require( './routes' )( app );


const PORT = process.env.PORT || 5000;
console.log( 'Listening on port ', PORT );
app.listen( PORT );

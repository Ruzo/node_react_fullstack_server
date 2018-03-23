require( './services/passportServ' );
require( './routes' );

const PORT = process.env.PORT || 5000;
console.log( 'Listening on port ', PORT );
app.listen( PORT );

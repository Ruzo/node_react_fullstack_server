module.exports = ( passport ) => {
  const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
  const keys = require( '../config/keys' );
  const { findUserByGoogleId, createUser, findUserById } = require( '../data' );

  passport.use( new GoogleStrategy( {
    clientID: keys.googleWebOauth.client_id,
    clientSecret: keys.googleWebOauth.client_secret,
    callbackURL: '/api/auth/google/callback',
    proxy: true
  }, async ( accessToken, refreshToken, profile, done ) => {
    const user = await findUserByGoogleId( profile.id );
    if ( user ) {
      done( null, user );
    }
    else {
      try {
        const user = createUser( profile );
        done( null, user );
      }
      catch ( err ) {
        err => console.log( err );
      }
    }
  } ) );

  passport.serializeUser( ( user, done ) => {
    done( null, user.id );
  } );

  passport.deserializeUser( async ( id, done ) => {
    const user = await findUserById( id );
    done( null, user );
  } );
}


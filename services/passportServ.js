module.exports = ( passport ) => {
  const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
  const keys = require( '../config/keys' );
  const User = require( '../models/user' );

  passport.use( new GoogleStrategy( {
    clientID: keys.dev.googleWebOauth.client_id,
    clientSecret: keys.dev.googleWebOauth.client_secret,
    callbackURL: '/api/auth/google/callback',
    proxy: true
  }, async ( accessToken, refreshToken, profile, done ) => {
    const user = await User.findOne( { googleId: profile.id } );
    if ( user ) {
      done( null, user );
    }
    else {
      try {
        const user = await new User( {
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[ 0 ]
        } ).save();
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
    const user = await User.findById( id );
    done( null, user );
  } );
}


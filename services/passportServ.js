module.exports = ( passport ) => {
  const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;
  const keys = require( '../config/keys' );
  const User = require( '../models/user' );

  passport.use( new GoogleStrategy( {
    clientID: keys.googleWebOauth.client_id,
    clientSecret: keys.googleWebOauth.client_secret,
    callbackURL: '/auth/google/callback'
  }, ( accessToken, refreshToken, profile, done ) => {
    console.log( profile );
    User.findOne( { googleId: profile.id } )
      .then( user => {
        if ( user ) {
          done( null, user );
        }
        else {
          new User( {
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[ 0 ]
          } )
            .save()
            .then( user => done( null, user ) )
            .catch( err => console.log( err ) );
        }
      } );
  } ) );

  passport.serializeUser( ( user, done ) => {
    done( null, user.id );
  } );

  passport.deserializeUser( ( id, done ) => {
    User.findById( id )
      .then( user => done( null, user ) );
  } );
}


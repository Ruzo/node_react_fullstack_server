const mongoose = require( 'mongoose' );
const { Schema } = mongoose;
const mlabURI = require( '../config/keys' ).mlabURI;

mongoose.connect( mlabURI );

const toLower = ( email ) => email.toLowerCase;

const userSchema = new Schema( {
  name: String,
  email: { type: String, set: toLower },
  googleId: String
} );

mongoose.model( 'user', userSchema );

// const User = mongoose.model( 'user' );

module.exports = mongoose.model( 'user' );
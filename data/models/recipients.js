const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

module.exports = new Schema( {
  email: String,
  surveyed: { type: Boolean, default: false }
} );
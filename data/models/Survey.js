const mongoose = require( 'mongoose' );
const { Schema } = mongoose;
const recipient = require( './recipients' );

const surveySchema = new Schema( {
  subject: String,
  body: String,
  recipients: [ recipient ],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  responded: Date
} );
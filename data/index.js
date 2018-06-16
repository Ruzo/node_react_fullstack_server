const User = require( './models/User' );

const findUserById = async ( id ) => {
  const user = await User.findById( id );
  return user;
}

const findUserByGoogleId = async ( id ) => {
  const user = await User.findOne( { googleId: id } );
  return user;
}

const createUser = async ( profile ) => {
  const user = await new User( {
    googleId: profile.id,
    name: profile.displayName,
    email: profile.emails[ 0 ],
    credits: 0,
    transactions: []
  } ).save();

  return user;
}

const recordCreditsSale = async ( { _id }, amount, charge ) => {
  const user = await User.findById( _id );
  user.credits += amount;
  user.transactions.push( charge );
  const updatedUser = await user.save();
  return updatedUser;
}

module.exports.findUserById = findUserById;
module.exports.findUserByGoogleId = findUserByGoogleId;
module.exports.createUser = createUser;
module.exports.recordCreditsSale = recordCreditsSale;
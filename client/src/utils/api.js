export const fetchUser = async () => {
  const response = await fetch( '/api/current_user', {
    credentials: "same-origin"
  } );
  console.log( 'RESPONSE: ', response )

  if ( response.status !== 200 ) throw Error( response.message );
  const body = await response.json();

  console.log( 'BODY', body );
  return body;
};

export const makePayment = async ( charge ) => {
  const payment = await fetch( '/api/stripe/payment', {
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin",
    method: 'POST',
    body: JSON.stringify( charge )
  } );
  if ( payment.status !== 200 ) throw Error( payment.message );
  const transaction = await payment.json() || null;
  const { updatedUser } = transaction;
  const { status, failure_code, failure_message } = transaction.charge;
  if ( failure_code ) {
    return {
      status,
      failure_code,
      failure_message
    }
  }
  console.log( 'CHARGE TRANSACTION UPDATED_USER:\n', updatedUser );
  return { updatedUser, status };
}
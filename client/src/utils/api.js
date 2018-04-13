const clog = console.log;

export const fetchUser = async () => {
  const response = await fetch( '/api/current_user', {
    credentials: "same-origin"
  } );
  clog( 'RESPONSE: ', response )
  const body = await response.json();

  if ( response.status !== 200 ) throw Error( body.message );

  clog( 'BODY', body );
  return body;
};

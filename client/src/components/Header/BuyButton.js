import glamorous from 'glamorous';

export default glamorous.button( {
  alignSelf: 'center',
  display: 'inline-block',
  backgroundColor: 'var(--darkest)',
  padding: '10px 20px',
  fontSize: '1.2rem',
  borderRadius: 25,
  boxShadow: '0 0 4px var(--light-bkg)',
  border: 'none',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  transition: '0.15s ease-out',
  ':hover': {
    boxShadow: '0 0 5px 1px var(--light-bkg)',
    transform: 'scale(1.02, 1.02)'
  },
  ':focus': {
    outline: 0
  },
  ':active': {
    transform: 'scale(1.01, 1.01)'
  }
  // height: 'fit-content'
} );
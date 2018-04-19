import glamorous from 'glamorous'
import { Link } from 'react-router-dom';

export default glamorous( Link )( {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  // backgroundColor: '#aaa',
  color: 'white',
  fontSize: '2rem',
  textDecoration: 'none',
} )

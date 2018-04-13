import React from 'react'
import glamorous from 'glamorous'

import StyledLogo from './Logo'
import LoginButton from './LoginButton'

export default ( { loginButtonText, reqPath } ) => {
  return (
    <StyledHeader>
      <StyledLogo>EMAILY</StyledLogo>
      <LoginButton
        href={ reqPath }
      >{ loginButtonText }</LoginButton>
    </StyledHeader>

    // <React.Fragment>
    //   <a href='/api/auth/google'>[ LOGIN ] </a>
    //   <a href='/api/logout'> [ LOGOUT ]</a>
    // </React.Fragment>
  )
}

const StyledHeader = glamorous.header( {
  display: 'flex',
  justifyContent: 'space-between',
  height: 80,
  width: '100%',
  padding: '0 15px',
  border: 'none',
  backgroundColor: 'var(--primary)',
  boxShadow: '0 5px 3px 2px var(--box-shadow-drop)',
  zIndex: 100
} )

import React from 'react'
import glamorous from 'glamorous'
import StripeCheckout from 'react-stripe-checkout';

import BuyButton from './BuyButton'
import StyledLogo from './Logo'
import LoginButton from './LoginButton'
import Credits from './Credits'

export default ( { loginButtonContent, makePayment, credits, user } ) => {
  return (
    <StyledHeader>
      <StyledLogo to='/'>EMAILY</StyledLogo>
      <ButtonsWrapper>
        { user.googleId && (
          <React.Fragment>
            <Credits>Credits: { credits || 0 }</Credits>
            <StripeCheckout
              name='EMAILY'
              description='$5 for 5 credits'
              token={ makePayment }
              stripeKey={ process.env.REACT_APP_STRIPE_KEY }
              amount={ 500 }
            >
              <BuyButton>Buy</BuyButton>
            </StripeCheckout>
          </React.Fragment>
        ) }
        <LoginButton
          href={ loginButtonContent.path }
        >{ loginButtonContent.label }</LoginButton>
      </ButtonsWrapper>
    </StyledHeader>
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

const ButtonsWrapper = glamorous.div( {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  border: 'none',
  width: '25%'
} )

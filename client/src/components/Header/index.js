import React, { Component } from 'react';
import StyledHeader from './Header';
import { StateContext } from '../../StateProvider';

export default class Header extends Component {

  renderHeader = ( { user }, { checkout } ) => {
    console.log( 'renderHeader user', user );
    return (
      <StyledHeader
        loginButtonContent={
          user.googleId
            ? {
              label: 'Logout',
              path: '/api/logout'
            }
            : {
              label: 'Login With Google',
              path: '/api/auth/google'
            }
        }
        makePayment={ checkout }
        credits={ user.credits }
        user={ user }
      />
    )
  }

  render() {
    return (
      <StateContext.Consumer>
        { state => this.renderHeader( state.auth, state.payment )
        }
      </StateContext.Consumer>
    )
  }
}

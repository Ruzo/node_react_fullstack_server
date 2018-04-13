import React, { Component } from 'react'
import StyledHeader from './Header'
import { StateContext } from '../StateProvider'

const clog = console.log;

export default class Header extends Component {

  renderHeader = ( { user } ) => {
    clog( 'renderHeader user', user );
    return (
      <StyledHeader
        loginButtonText={ user.googleId ? 'Logout' : 'Login With Google' }
        reqPath={ user.googleId ? '/api/logout' : '/api/auth/google' }
      />
    )
  }

  render() {
    return (
      <StateContext.Consumer>
        { state => this.renderHeader( state.auth )
        }
      </StateContext.Consumer>
    )
  }
}

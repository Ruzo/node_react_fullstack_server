import React, { Component, createContext } from 'react';
import { fetchUser, makePayment } from '../../utils/api';


export const StateContext = createContext();

export default class StateProvider extends Component {
  state = {
    user: {}
  }
  async componentDidMount() {
    const user = await fetchUser();
    console.log( 'Inside StateProvider', user );
    this.setState( { user } );
  }

  handlePayment = async ( charge ) => {
    const { updatedUser, status } = await makePayment( charge );
    console.log( 'TRANSACTION STATUS: ', status );
    this.setState( { user: updatedUser } );
  }

  render() {
    return (
      <StateContext.Provider value={ {
        auth: {
          user: this.state.user
        },
        payment: {
          checkout: ( charge ) => this.handlePayment( charge )
        }
      } }>
        { this.props.children }
      </StateContext.Provider>
    )
  }
}

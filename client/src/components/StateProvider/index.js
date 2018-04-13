import React, { Component, createContext } from 'react';
import { fetchUser } from '../../utils/api';

const clog = console.log;

export const StateContext = createContext();

export default class StateProvider extends Component {
  state = {
    user: {}
  }
  async componentDidMount() {
    const user = await fetchUser();
    clog( 'Inside StateProvider', user );
    this.setState( { user } );
  }

  render() {
    return (
      <StateContext.Provider value={ {
        auth: {
          user: this.state.user
        }
      } }>
        { this.props.children }
      </StateContext.Provider>
    )
  }
}

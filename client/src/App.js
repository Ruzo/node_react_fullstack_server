import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const clog = console.log;

class App extends Component {
  state = {
    user: ''
  };

  componentDidMount() {
    this.fetchUser()
      .then( user => this.setState( { user: user.name || null } ) )
      .catch( err => clog( 'Fetch Error: ', err ) );
  }

  fetchUser = async () => {
    const response = await fetch( '/api/current_user', {
      headers: { "Accept": "application/json" },
      credentials: "same-origin"
    } );
    clog( 'RESPONSE: ', response )
    const body = await response.json();

    if ( response.status !== 200 ) throw Error( body.message );

    clog( 'BODY', body );
    return body;
  };

  loggedInRender = () => (
    <div>
      { this.state.user + ' is logged in' }
      <h3>
        <a href="/api/logout">Logout</a>
      </h3>
    </div>
  )

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { this.state.user ? this.loggedInRender() : <a href='/api/auth/google' >Login with Google</a> }
      </div>
    );
  }
}

export default App;

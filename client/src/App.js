import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import glamorous from 'glamorous';

import StateProvider from './StateProvider'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

// const clog = console.log;

class App extends Component {

  render() {
    return (
      <StateProvider>
        <BrowserRouter>
          <Container>
            <Header />
            <Route path='/' component={ Dashboard } />
          </Container>
        </BrowserRouter>
      </StateProvider>
    );
  }
}

const Container = glamorous.div( {
  margin: '0 auto',
  display: 'flex',
  height: '100%',
  width: '80%',
  alignItems: 'center',
  flexDirection: 'column'
} );

export default App;

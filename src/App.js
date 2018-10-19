import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 2em;
  border-radius: 3%;
  background-color: white;
  color: #10aded;
  border: 2px solid #10aded;
  margin: 1em;
  padding: 1em;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>Develop</Button>
        </header>
      </div>
    );
  }
}

export default App;

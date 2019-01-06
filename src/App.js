import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import TicTacToe from './components/TicTacToe';

const lodash = require('lodash');
const TicTac = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <TicTac>
          <TicTacToe />
        </TicTac>
      </div>
    );
  }
}

export default App;
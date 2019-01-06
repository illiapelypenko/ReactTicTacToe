import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import TicTacToe from './components/TicTacToe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TicTacToe />
      </div>
    );
  }
}

export default App;
  /*blue 
  color: rgb(44, 62, 81);*/
  /*yellow
  color: rgb(252, 193, 59);*/
  /*grey
  color: rgb(188, 196, 200);*/
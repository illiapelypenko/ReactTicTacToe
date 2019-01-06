import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import Info from './Info';
import PlayButton from './PlayButton';

const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100vh;
  /* background-color: rgb(38, 40, 53); */
`;

export class TicTacToe extends Component {
  constructor() {
    super();
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
    this.state = {
      cells: [
        {index: 0, value: '' },
        {index: 1, value: '' },
        {index: 2, value: '' },

        {index: 3, value: '' },
        {index: 4, value: '' },
        {index: 5, value: '' },

        {index: 6, value: '' },
        {index: 7, value: '' },
        {index: 8, value: '' }
      ],
      xIsNext: true,
      winner: '',
      isFull: false
    }
  }
  theWinner(cells) {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (cells[a].value && cells[a].value === cells[b].value && cells[a].value === cells[c].value) {
        return cells[a].value;
      }
    }
    return null;
  }
  handleCellClick(index) {
    let {cells, xIsNext, winner} = {...this.state};

    if(xIsNext && !winner && !cells[index].value){
      cells[index].value = 'X';
      xIsNext = false;
    } else if(!xIsNext && !winner && !cells[index].value) {
      cells[index].value = 'O';
      xIsNext = true;
    }
    let areFreeCells = false;
    cells.forEach(cell => {
      if(cell.value === ''){
        areFreeCells = true;
      }
    });
    areFreeCells ? this.setState({isFull: false}) : this.setState({isFull: true});
    winner = this.theWinner(cells);

    this.setState({cells, xIsNext, winner});
  }

  handlePlayButtonClick() {//to do
    this.setState({
      cells: [
        {index: 0, value: '' },
        {index: 1, value: '' },
        {index: 2, value: '' },

        {index: 3, value: '' },
        {index: 4, value: '' },
        {index: 5, value: '' },

        {index: 6, value: '' },
        {index: 7, value: '' },
        {index: 8, value: '' }
      ],
      xIsNext: true,
      winner: '',
      isFull: false
    
    });
  }

  render() {

    return (
      <Game>
        <Info xIsNext={this.state.xIsNext} winner={this.state.winner} isFull={this.state.isFull}/>
        <Board cells={this.state.cells} onClick={this.handleCellClick}/>
        <PlayButton onClick={this.handlePlayButtonClick}/>
      </Game>
    )
  }
}

export default TicTacToe
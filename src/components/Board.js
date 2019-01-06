import React, { Component } from 'react';
import Cell from './Cell'
import styled from 'styled-components';

const Box = styled.div`
  height: 322px;
  width: 322px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  background-color: rgb(188, 196, 200);
`;

export class Board extends Component {
  render() {
    return (
      <Box>
        {this.props.cells.map(cell => <Cell 
          key={cell.index} 
          value={cell.value} 
          onClick={() => this.props.onClick(cell.index)}
        />)}
      </Box>
    )
  }
}

export default Board

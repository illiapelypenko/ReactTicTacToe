import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 100px;
  border: 1px solid white;

  font-size: 4rem;
  font-weight: bold;
  
  background-color: rgb(44, 62, 81);
  color: rgb(252, 193, 59);

  outline: none;
  cursor: pointer;
`;

export class Cell extends Component {
  render() {
    return (
      <Button onClick={this.props.onClick}>
        {this.props.value}
      </Button>
    )
  }
}

export default Cell;
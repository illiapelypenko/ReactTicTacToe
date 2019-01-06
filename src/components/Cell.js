import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 3rem;
  border: 1px solid black;
  height: 80px;
  width: 80px;
  margin: 10px;
  outline: none;
  background-color: rgb(44, 62, 81);
  color: rgb(252, 193, 59);
  display: flex;
  justify-content: center;
  align-items: center;
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

export default Cell

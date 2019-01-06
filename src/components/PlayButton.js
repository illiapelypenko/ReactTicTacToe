import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  color: rgb(247, 115, 15);
  font-size: 1rem;
  font-weight: bold;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
`;

export class PlayButton extends Component {
  render() {
    return (
      <Button onClick={this.props.onClick}>
        Reset
      </Button>
    )
  }
}

export default PlayButton

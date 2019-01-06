import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  width: 298px;
  height: 48px;
  margin: 1px 0px 1px 0px;

  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  color: rgb(252, 193, 59);
  background-color: rgb(44, 62, 81);

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

export default PlayButton;
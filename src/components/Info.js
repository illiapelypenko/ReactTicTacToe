import React, { Component } from 'react';
import styled from 'styled-components';

const Message = styled.div`
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

export class Info extends Component {
  render() {
    let info = '';

    this.props.winner ? 
    info = `Winner is ${this.props.winner}` : 
    info = this.props.xIsNext ? 'X is next' : 'O is next';

    if(this.props.isFull && !this.props.winner)
      info = 'Draw';

    return (
      <Message>{info}</Message>
    )
  }
}

export default Info;
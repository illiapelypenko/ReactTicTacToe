import React, { Component } from 'react';
import styled from 'styled-components';
const Message = styled.h4`
  margin: 10px 0px 10px 0px;
  color: rgb(247, 115, 15);
`;

export class Info extends Component {
  render() {
    let info = '';
    if(this.props.winner){
      info = `Winner is ${this.props.winner}`;
    } else {
      info = this.props.xIsNext ? 'X is next' : 'O is next';
    }
    return (
      <Message>{info}</Message>
    )
  }
}

export default Info

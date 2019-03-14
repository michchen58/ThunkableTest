import React from 'react';
import styled from 'styled-components';

const InputElt = styled.input`
  font-size: 1em;
  color: #444;
  padding: 0.3em 0.5em;
  width:175px;
`;


const Input = props => (
  <form onSubmit={event => {props.submitCb(event, props.itemKey)}}>
    <InputElt maxlength="50" onChange={event => props.onChangeCb(event)} value={props.inputText} />
  </form>
);

export default Input;

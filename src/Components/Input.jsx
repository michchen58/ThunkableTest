import React from 'react';

const Input = props => (
  <form onSubmit={event => {props.submitCb(event, props.itemKey)}}>
    <input onChange={event => props.onChangeCb(event)} value={props.inputText}></input>
  </form>
);

export default Input;

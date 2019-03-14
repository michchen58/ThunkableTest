import React from 'react';
import styled from 'styled-components';

const FormElt = styled.form`
width: 50%;
max-width: 175px;
min-width: 150px;
overflow: hidden;
border:1px solid #ccc;
border-radius: 5px;
`;

const InputElt = styled.input`
color: #444;
font-size: 1em;
padding: 0.3em 0.5em;
border:0px;
width: 100%:
`;

const Input = props => (
  <FormElt onSubmit={event => {props.submitCb(event, props.itemKey)}}>
    <InputElt maxlength="50" onChange={event => props.onChangeCb(event)} value={props.inputText} />
  </FormElt>
);

export default Input;

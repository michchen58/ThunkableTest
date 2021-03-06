import React from 'react';
import styled from 'styled-components';

const AddButtonElt = styled.div`
  font-size: 2.25em;
  position: absolute;
  top:90px;
  right: 7.5%;
  background-color: rgb(76, 68, 96);
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  cursor: pointer;
`;

const AddButton = props => (
  <AddButtonElt className="noselect" onClick={() => props.clickCb()}>
    <img src="../img/Plus Sign.svg" alt="Add Project"/>
  </AddButtonElt>
);

export default AddButton;

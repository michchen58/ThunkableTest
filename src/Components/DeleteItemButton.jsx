import React from 'react';
import styled from 'styled-components';

const DeleteElt = styled.span`
  background-image: url('../img/DeleteIcon.svg');
  background-repeat: no-repeat;
  cursor:pointer;
  width: 21px;
  height: 21px;
  position: absolute;
  right: 36px;

  &:hover {
    background-image: url('../img/DeleteIcon_Hover.svg');
  }
`;

const DeleteItemButton = props => (
  <DeleteElt className="noselect" onClick={e => props.clickCb(e)}></DeleteElt>
);

export default DeleteItemButton;

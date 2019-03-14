import React from 'react';
import styled from 'styled-components';

const EditElt = styled.span`
  background-image: url('../img/EditIcon.svg');
  background-repeat: no-repeat;
  cursor:pointer;
  width: 21px;
  height: 21px;

  &:hover {
    background-image: url('../img/EditIcon_Hover.svg');
  }
`;

const EditButton = props => (
  <EditElt className="noselect" onClick={() => props.clickCb()}></EditElt>
);

export default EditButton;

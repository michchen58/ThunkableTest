import React from 'react';

const DeleteItemButton = props => (
  <span onClick={e => props.clickCb(e)}>[x]</span>
);

export default DeleteItemButton;

import React from 'react';

const AddButton = props => (
  <div onClick={() => props.clickCb()}>+</div>
);

export default AddButton;

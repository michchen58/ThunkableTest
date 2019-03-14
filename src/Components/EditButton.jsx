import React from 'react';

const EditButton = props => (
  <span onClick={() => props.clickCb()}>[edit]</span>
);

export default EditButton;

import React, {Component} from 'react';
import styled from 'styled-components';
import utils from '../utils.js'

import Input from './Input.jsx'
import DeleteItemButton from './DeleteItemButton.jsx'
import EditButton from './EditButton.jsx';

const ItemElt = styled.li`
  background-color: rgb(253, 253, 253);
  height: 68px;
  padding: 0 75px;
  margin: 0;
  border: 0px solid #e9e9e9;
  border-width: 1px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: url('./img/defaultProjectIcon_2x.png');
  background-repeat: no-repeat;
  background-position: 24px center;
  background-size: 30px;
  position:relative;
`;

const TitleElt = styled.h2`
  font-size: 1.2em;
  color:#333;
  font-weight:600;
  width: 25%;
  min-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateElt = styled.span`
  color: #555;
  position: absolute;
  left: 54%;
  font-size: 0.9em;
`;

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.addItemInputOnChange = this.addItemInputOnChange.bind(this);
  }

  addItemInputOnChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    // debugger
    return (
      <ItemElt className="list-item">
        {this.props.data.editing
          /* input box */
          ? <React.Fragment>
              <Input submitCb={event => this.props.submitCb(event, this.props.itemKey, this.state.text)}
                     onChangeCb={this.addItemInputOnChange}
                     inputText={this.state.text}
                     itemKey={this.props.itemKey}
              />
            </React.Fragment>

          /* text only */
          : <React.Fragment>
              <TitleElt>
                {this.props.data.name}
              </TitleElt>
              <EditButton clickCb={() => this.props.startEditCb(this.props.data, this.props.itemKey)} />
            </React.Fragment>
        }
        <DateElt>{this.props.data.timestamp || utils.timestamp()}</DateElt>
        <DeleteItemButton clickCb={() => this.props.deleteCb(this.props.itemKey)}/>
      </ItemElt>
    );
  }
}

export default ListItem;

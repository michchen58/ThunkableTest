import React, {Component} from 'react';
import styled from 'styled-components';

import Input from './Input.jsx'
import DeleteItemButton from './DeleteItemButton.jsx'
import EditButton from './EditButton.jsx';

const ItemElt = styled.div`
  color:red;
  background-color: rgb(253, 253, 253);
  height: 55px;
  border-color: rgb(240, 241, 244);
  border-width: 10px;
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
      <ItemElt>
        {this.props.data.editing
          /* input box */
          ? <span>
              <Input submitCb={event => this.props.submitCb(event, this.props.itemKey, this.state.text)}
                     onChangeCb={this.addItemInputOnChange}
                     inputText={this.state.text}
                     itemKey={this.props.itemKey}
              />
            </span>

          /* text only */
          : <span>
              {this.props.data.name}
              <EditButton clickCb={() => this.props.startEditCb(this.props.data, this.props.itemKey)} />
            </span>
        }
        <span>{this.props.data.timestamp}</span>
        <DeleteItemButton clickCb={() => this.props.deleteCb(this.props.itemKey)}/>
      </ItemElt>
    );
  }
}

export default ListItem;

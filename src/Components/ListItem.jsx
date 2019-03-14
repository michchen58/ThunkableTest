import React, {Component} from 'react';
import Input from './Input.jsx'
import DeleteItemButton from './DeleteItemButton.jsx'
import EditButton from './EditButton.jsx';

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
      <div>
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
      </div>
    );
  }
}

export default ListItem;

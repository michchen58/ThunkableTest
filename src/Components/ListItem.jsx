import React, {Component} from 'react';
import Input from './Input.jsx'
// import DeleteItemButton from './DeleteItemButton.jsx'
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
    // console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        {this.props.data.editing
          ? <Input submitCb={event => this.props.submitCb(event, this.props.itemKey, this.state.text)}
                   onChangeCb={this.addItemInputOnChange}
                   inputText={this.state.text}
                   itemKey={this.props.itemKey}
            />
          : <span>{this.props.data.name} <EditButton clickCb={() => this.props.editCb(this.props.data, this.props.itemKey)} /></span>}
      </div>
    );
  }
}

export default ListItem;

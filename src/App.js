import React, { Component } from 'react';
import './App.css';

import ListItem from './Components/ListItem.jsx';
import AddButton from './Components/AddButton.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        'one' : {
          name: 'name of one',
          editing: true,
        },
        'two' : {
          name: 'name of one',
          editing: false
        },
        'three' : {
          name: 'name of one',
          editing: false
        },
      },
      order: ['one', 'two', 'three'],
      addingItem: false,
      newItem: '',
      itemCounter: 0
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.submitEdit = this.submitEdit.bind(this);

  }

  deepcopy(obj) {
    if (Array.isArray(obj)) {
      let newObj = obj.slice();
      return newObj;
    } else {
      return JSON.parse(JSON.stringify(obj));
    }
  }

  timestamp() {
    let d = new Date();
    let monthString = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthString[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  }

  addNewItem() {
    let newKey = this.state.itemCounter + 1;

    let oldItems = this.deepcopy(this.state.items);
    oldItems[newKey] = {
      name: '',
      editing: true
    };

    let oldOrder = this.deepcopy(this.state.order);
    oldOrder.push(newKey);

    this.setState({
      items: oldItems,
      order: oldOrder,
      itemCounter: this.state.itemCounter + 1,
    });
  }

  addItemSubmit(e) {
    e.preventDefault();
    let formElt = e.target;
    let itemName = this.state.newItem;

    let newOrder = this.state.order.slice()
    newOrder.push(itemName);

    let newItems = this.deepcopy(this.state.items);
    newItems[itemName] = {
      name: itemName
    }
    this.setState({
      order: newOrder,
      items: newItems,
      newItem: ''
    }, () => {
      formElt.reset();
    });
  }

  deleteItem(e) {
    alert('delete');
  }

  editItem(itemName, itemKey) {
    let newItems = this.deepcopy(this.state.items);
    newItems[itemKey].editing = true;
    this.setState({
      items: newItems
    });
  }

  submitEdit(e, itemKey, newName) {
    e.preventDefault();
    let formElt = e.target;

    let newItems = this.deepcopy(this.state.items);
    newItems[itemKey] = {
      name: newName,
      editing: false
    }
    this.setState({
      items: newItems,
    }, () => {
      formElt.reset();
    });
  }

  render() {
    return (
      <div className="App">
        <AddButton clickCb={this.addNewItem}/>
        {this.state.order.map(dataItem => (
            <ListItem data={this.state.items[dataItem]}
                      key={dataItem}
                      itemKey={dataItem}
                      editCb={this.editItem}
                      onChangeCb={this.addItemInputOnChange}
                      submitCb={this.submitEdit}
            />
          ))}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import utils from './utils.js'

import ListItem from './Components/ListItem.jsx';
import AddButton from './Components/AddButton.jsx';

const AppElt = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
  max-width: 1000px;
  position:relative;
`;

// padding: 0px 5%;
const ListElt = styled.ul`
  width: 88%;
  padding: 0;
  margin: 63px 6%;
  border: 1px solid rgb(230, 230, 250);
  border-width: 0 0 1px 0;
`;

const ProjectsHeader = styled.div`
  width: 100%;
  text-transform: uppercase;
  height: 20px;
  display:block;
  margin-top: 45px;
  padding: 0 0 5px 5%;
  border-bottom: 2px solid red;
`;

const LogoElt = styled.img`
  width: 35px;
  margin-top: 10px;
  margin-left: 5%;
`;



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        '1' : {
          name: 'Coding Test',
          editing: false,
        }
      },
      order: ['1'],
      addingItem: false,
      newItem: '',
      itemCounter: 1
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  /* FUNCTIONS */

  addNewItem() {
    let newKey = this.state.itemCounter + 1;
    let oldItems = utils.deepcopy(this.state.items);
    oldItems[newKey] = {
      name: '',
      editing: true
    };

    let oldOrder = utils.deepcopy(this.state.order);
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

    let newItems = utils.deepcopy(this.state.items);
    newItems[itemName] = {
      name: itemName
    }
    this.setState({
      order: newOrder,
      items: newItems,
      newItem: '',
      timestamp: utils.timestamp()
    }, () => {
      formElt.reset();
    });
  }

  startEdit(itemName, itemKey) {
    let newItems = utils.deepcopy(this.state.items);
    newItems[itemKey].editing = true;
    this.setState({
      items: newItems
    });
  }

  submitEdit(e, itemKey, newName) {
    e.preventDefault();
    let formElt = e.target;

    let newItems = utils.deepcopy(this.state.items);
    newItems[itemKey] = {
      name: newName,
      editing: false,
      timestamp: utils.timestamp()
    }
    this.setState({
      items: newItems,
    }, () => {
      formElt.reset();
    });
  }

  deleteItem(itemKey) {
    let newItems = utils.deepcopy(this.state.items);
    delete newItems[itemKey];
    let newOrder = utils.deepcopy(this.state.order);
    newOrder = newOrder.filter(k => k !== itemKey);

    this.setState({
      items: newItems,
      order: newOrder
    })

  }

  render() {
    // <HeaderLogo></HeaderLogo>
    return (
      <AppElt>
        <AddButton clickCb={this.addNewItem}/>
        <LogoElt src="./img/ThunkableBeaver.png" alt="Thunkable Logo" />
        <ProjectsHeader>My Projects</ProjectsHeader>
        <ListElt>
          {this.state.order.map(dataItem => (
              <ListItem data={this.state.items[dataItem]}
                        key={dataItem}
                        itemKey={dataItem}
                        startEditCb={this.startEdit}
                        submitCb={this.submitEdit}
                        deleteCb={this.deleteItem}
              />
            ))}
          </ListElt>
      </AppElt>
    );
  }
}

export default App;

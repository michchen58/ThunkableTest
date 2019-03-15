import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import utils from './utils.js'

import ListItem from './Components/ListItem.jsx';
import AddButton from './Components/AddButton.jsx';
import Alert from './Components/Alert.jsx';

const AppElt = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-width: 500px;
  max-width: 1000px;
  font-family: 'Open Sans', sans-serif;
  color: #262626;
  font-size:16px;
`;

const ListElt = styled.ul`
  width: 88%;
  padding: 0;
  margin: 63px 6%;
  border: 1px solid #e9e9e9;
  border-width: 0 0 1px 0;
`;

const ProjectsHeader = styled.div`
  width: 100%;
  text-transform: uppercase;
  height: 20px;
  display:block;
  margin-top: 45px;
  padding: 0 0 5px 5%;
`;
const LineElt = styled.div`
  position:absolute;
  top:120px;
  width:100%;
  height:2px;
  background-color: #e9e9e9;
`;

const LogoElt = styled.img`
  width: 35px;
  margin-top: 10px;
  margin-left: 5%;
`;

const EmptyMsg = styled.span`
  color: #666;
  font-style: italic;
  margin: 85px 6%;
  text-align: center;
  font-weight:600;
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
      itemCounter: 1,
      alert: false,
      currentModal: null
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.clickModal = this.clickModal.bind(this);

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

  showModal(itemKey) {
    this.setState({
      alert: true,
      currentModal: itemKey
    }, () => {


    });
  }

  clickModal(option) {
    console.log(option)
    this.setState({
      alert: false
    }, () => {
      if (option) {
        let itemKey = this.state.currentModal;
        let newItems = utils.deepcopy(this.state.items);
        delete newItems[itemKey];
        let newOrder = utils.deepcopy(this.state.order);
        newOrder = newOrder.filter(k => k !== itemKey);

        this.setState({
          items: newItems,
          order: newOrder,
          editing: false,
          currentModal: null
        });
      }
    })
  }

  render() {
    // <HeaderLogo></HeaderLogo>
    return (
      <React.Fragment>
        <LineElt />
        <AppElt className="noselect">
          <AddButton clickCb={this.addNewItem}/>
          <LogoElt src="./img/ThunkableBeaver.png" alt="Thunkable Logo" />
          <ProjectsHeader>My Projects</ProjectsHeader>
          {this.state.order.length > 0
            ? <ListElt>
              {
                this.state.order.map(dataItem => (
                  <ListItem data={this.state.items[dataItem]}
                            key={dataItem}
                            itemKey={dataItem}
                            startEditCb={this.startEdit}
                            submitCb={this.submitEdit}
                            modalCb={this.showModal}
                  />
                ))
              }
            </ListElt>
            : <EmptyMsg>Add a project by clicking the + button above.</EmptyMsg>
          }
        </AppElt>
        <Alert visible={this.state.alert}
               message="Are you sure you want to delete this project?"
               sub="This action can't be undone."
               clickModalCb={this.clickModal}
         />
      </React.Fragment>
    );
  }
}

export default App;

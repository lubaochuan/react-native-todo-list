import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var ToDoEdit = require('./application/components/ToDoEdit');
var ToDoList = require('./application/components/ToDoList');

class RN_ToDoList extends Component {
  render() {
    return (
      <ToDoList
        items={
          [{txt: 'Read a book', complete: false},
           {txt: 'Take a walk', complete: true}]}
        onPressItem={this.openItem}
        onLongPressItem={this.alertMenu}/>
    );
  }

  openItem(){}
  alertMenu(){}
}

AppRegistry.registerComponent('RN_ToDoList', () => RN_ToDoList);

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var ToDoEdit = require('./application/components/ToDoEdit');

class RN_ToDoList extends Component {
  render() {
    return (
      <ToDoEdit />
    );
  }
}

AppRegistry.registerComponent('RN_ToDoList', () => RN_ToDoList);

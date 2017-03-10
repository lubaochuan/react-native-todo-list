'use strict';
import React, {Component} from 'react';
import {AppRegistry, NavigatorIOS} from 'react-native';

var styles = require('./application/styles/styles');
var ToDoListContainer = require('./application/components/ToDoListContainer');

class RN_ToDoList extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.navigator}
        initialRoute={{component: ToDoListContainer, title: 'TO DOs'}}/>
    );
  }
}


AppRegistry.registerComponent('RN_ToDoList', () => RN_ToDoList);

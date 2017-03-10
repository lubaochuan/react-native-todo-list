'use strict';
import React, { Component } from 'react';
import { Text, View, ListView, TouchableHighlight, Alert } from 'react-native';
var styles = require('../styles/styles');
var ToDoList = require('./ToDoList');
var ToDoEdit = require('./ToDoEdit');

class ToDoContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {txt: 'Read a book', complete: false},
        {txt: 'Take a walk', complete: true}
      ]
    };
    this.alertMenu = this.alertMenu.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.openItem = this.openItem.bind(this);
  }

  /*https://facebook.github.io/react-native/docs/alert.html*/
  alertMenu(rowData, rowID) {
    Alert.alert(
      'Quick Menu',
      null,
      [
        {text: 'Delete', onPress: () => this.deleteItem(rowID)},
        {text: 'Edit', onPress: () => this.openItem(rowData, rowID)},
        {text: 'Cancel'}
      ],
      { cancelable: false }
    )
  }

  deleteItem(index) {
    var items = this.state.items;
    items.splice(index, 1);
    this.setState({items: items})
  }

  updateItem(item, index) {
    var items = this.state.items;
    if (index) {
      items[index] = item;
    }
    else {
      items.push(item)
    }
    this.setState({items: items});
    this.props.navigator.pop();
  }

  openItem(rowData, rowID) {
    this.props.navigator.push({
      title: rowData && rowData.txt || 'New Item',
      component: ToDoEdit,
      passProps: {item: rowData, id: rowID, update: this.updateItem}
    });
  }

  render() {
    return (
      <View style={{flex:1}}>
        <ToDoList
          items={this.state.items}
          onPressItem={this.openItem}
          onLongPressItem={this.alertMenu}/>
        <TouchableHighlight
          style={[styles.button, styles.newButton]}
          underlayColor='#99d9f4'
          onPress={this.openItem}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ToDoContainer;

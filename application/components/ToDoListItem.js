'use strict';
import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
var styles = require('../styles/styles');

class ToDoListItem extends Component {
  render() {
    var item = this.props.item;
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}>
          <View style={styles.container}>
            <Text
              style={[styles.txt, item.complete && styles.completed]}>
              {item.txt}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.hr}/>
      </View>
    );
  }
}

module.exports = ToDoListItem;

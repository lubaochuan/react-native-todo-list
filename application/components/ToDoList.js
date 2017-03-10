'use strict';
import React, { Component } from 'react';
import { ListView } from 'react-native';
var styles = require('../styles/styles');
var ToDoListItem = require('./ToDoListItem');

class ToDoList extends Component {
  componentWillMount() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.items);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={(rowData, sectionID, rowID) =>
          <ToDoListItem item={rowData}
          onPress={() => this.props.onPressItem(rowData, rowID)}
          onLongPress={() => this.props.onLongPressItem(rowData, rowID)} />
        }
        style={styles.listView}/>
    );
  }
}

module.exports = ToDoList;

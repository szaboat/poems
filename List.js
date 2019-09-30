import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const extractKey = ({ id }) => id.toString()

export default class List extends Component {

    renderItem = ({ item }) => {
        const { onPressItem } = this.props

        return (
          <TouchableOpacity onPress={() => onPressItem(item)}>
            <Text style={styles.row}>
              {item.text}
            </Text>
          </TouchableOpacity>
        )
      }

    render() {
        const { list } = this.props
        return (
          <FlatList
            style={ styles.container }
            data={ list }
            renderItem={ this.renderItem }
            keyExtractor={ extractKey }
          />
        );
    }
}

const styles = StyleSheet.create(
  {
    container: {
    paddingTop: 15,
  },
  row: {
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'Latin Modern Roman'
  }
})
import React, { Component } from "react";
import PoemView from "./PoemView";
import { ScrollView, StyleSheet } from "react-native";
import { containerStyle } from "./styles";


export default class DetailsScreen extends Component {
  getByValue = (arr, value) => {
    const result  = arr.filter((item) => item.id == value);
    return result? result[0] : null;
  }

  render = () => {
    const { navigation } = this.props;
    return (
      <ScrollView style={[containerStyle.container, style.dark]}>
        <PoemView poem={this.getByValue(poems, navigation.getParam("poemId"))} />
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
    dark: {
        backgroundColor: '#eff0f1'
    }
});

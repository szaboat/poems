import React, { Component } from "react";

import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import poems from "./poems";
import Title from "./Title";
import List from "./List";
import DetailsScreen from "./DetailsScreen";
import { containerStyle } from "./styles";

class HomeScreen extends Component {
  state = {
    selectedPoem: -1
  };

  showStory = item => {
    this.setState({ selectedPoem: item.id });
    this.props.navigation.navigate('Details', {poemId: item.id});
  };

  render() {
    return (
      <ScrollView style={containerStyle.container}>
        <Title>Kányádi Sándor egyberostált versei</Title>
        <List list={poems.sort((a, b) => (a.text > b.text))} onPressItem={this.showStory} />
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);

import React, { Component } from "react";
import {StatusBar, View} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { createStackNavigator, createAppContainer } from "react-navigation";

import PoemRepository from "./repositories/PoemsRepository";
import Title from "./Title";
import List from "./List";
import DetailsScreen from "./DetailsScreen";
import { containerStyle } from "./styles";
import * as Font from 'expo-font';


class HomeScreen extends Component {
  state = {
    selectedPoem: -1,
    fontLoaded: false
  };

  showStory = item => {
    this.setState({ selectedPoem: item.id });
    this.props.navigation.navigate('Details', {poemId: item.id});
  };

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Latin Modern Roman': require('./assets/fonts/Latin-Modern-Roman/lmroman10-regular.otf'),
      'Latin Modern Roman Bold': require('./assets/fonts/Latin-Modern-Roman/lmroman10-bold.otf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    this.poems = PoemRepository.getPoems();
    return this.state.fontLoaded ? (
      <ScrollView style={containerStyle.container}>
        <Title>Kányádi Sándor egyberostált versei</Title>
        <List list={this.poems.sort((a, b) => (a.text > b.text))} onPressItem={this.showStory} />
      </ScrollView>
    ) : null;
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

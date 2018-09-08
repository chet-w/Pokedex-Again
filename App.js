import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import PokemonSearch from './pages/pokemon-search.js';
import BerriesSearch from './pages/berries-search.js';

type Props = {};


const RootStack = createStackNavigator(
    {
      Pokemon: PokemonSearch,
      Berries: BerriesSearch
    },
    {
        initialRouteName: 'Pokemon'
    }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

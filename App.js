import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import PokemonSearch from './pages/pokemon-search.js';
import Pokemon from './pages/pokemon.js';
import BerriesSearch from './pages/berries-search.js';


const Drawer = createDrawerNavigator(
    {
        Pokemon: {
            screen: PokemonSearch
        },
        PokemonPage: {
            screen: Pokemon
        },
        Berries: {
            screen: BerriesSearch
        }
    }
)



console.disableYellowBox = true;

export default class App extends React.Component {
    render() {
        return <Drawer />;
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

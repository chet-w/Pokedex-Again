import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class PokemonSearch extends React.Component {

    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>PokemonSearch Screen</Text>
                <Button
                  title="Go to Details"
                  onPress={() => this.props.navigation.navigate('Berries')}
                />
            </View>
        );
    }
}
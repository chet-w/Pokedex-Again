import React, { Component } from 'react';
import { Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import PageHeader from '../components/page-header.js';


 class Pokemon extends Component {

    static navigationOptions = {
        drawerLabel: () => null
    }

    constructor(props) {
        super(props);
        this.state = {
            name: this.removeQuotes(JSON.stringify(this.props.navigation.getParam('name', 'test')))
        }
    }

    removeQuotes(string){
        return string.substr(1, string.length - 2)
    }

    render() {

        return (
           <PageHeader title={this.state.name} navigation={this.props.navigation}/>
          
        )
    }
}

export default withNavigation(Pokemon);
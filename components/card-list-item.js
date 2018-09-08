import React, { Component } from 'react';
import { Card, CardItem, Text, Right, Icon } from 'native-base';



export default class CardListItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: this.props.name
        }
    }

    render(){


        return (
            <Card>
                <CardItem>
                    <Text>{this.state.name}</Text>
                    <Right>
                        <Icon onPress={this.props.click} name="arrow-forward" />
                    </Right>
                </CardItem>
             </Card>
        )
    }

}
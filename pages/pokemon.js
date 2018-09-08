import React { Component } from 'react';
import PageHeader from '../components/page-header.js';


export default class Pokemon extends Component {

    constructor(props){
        super(props);



    }

    render() {
        return(
            <PageHeader title="Pokemon Page" navigation={this.props.navigation}/>
        )
    }

}
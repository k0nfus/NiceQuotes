import React, { Component, Fragment } from 'react';
import {Text} from 'react-native';
/*
export default funkction Quote(props) {
    const { text, author } = props
    return (
        <Fragment>
            <Text>{text}</Text>
            <Text>-- {author}</Text>
        </Fragment>
    );
}
*/
export default class Quote extends Component {
    render(){
        const { text, author } = this.props; // destructuring
        // const text = this.props.text;
        // const author = this.props.author;
        return(
            <Fragment>
            <Text>{text}</Text>
            <Text>-- {author}</Text>
            </Fragment>
        );
    }
}
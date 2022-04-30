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
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.author}>&mdash; {author}</Text>
            </Fragment>
        );
    }
}

const styles = {
    text: {
        fontSize: 36,
        fontStyle: 'italic',
        color: 'white'
    },
    author: {
        fontSize: 20,
        color: 'white'
    }
};
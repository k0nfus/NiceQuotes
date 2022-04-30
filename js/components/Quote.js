import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
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
            <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.author}>&mdash; {author}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        margin: 20,
        padding: 50,
        backgroundColor: 'white',
        elevation: 20,
        borderRadius: 15,
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black',
        textAlign: 'center',
    },
    author: {
        fontSize: 15,
        color: 'black',
        textAlign: 'right'
    }
});
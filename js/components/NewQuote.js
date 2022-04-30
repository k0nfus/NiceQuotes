import React, { Component } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

export default class NewQuote extends Component {
    
    state={ content: null, author: null };

    render() {
        // this.props.onSave
        return (
        <Modal visible={this.props.visible}
        onRequestClose={this.props.onSave}
        animationType="slide"
        >
            <View style={styles.container}>
             <TextInput style={[styles.input, { height: 150 }]} 
            multiline={true} 
            placeholder="Inhalt des Zitats" 
            underlineColorAndroid="transparent" 
            onChangeText={text => this.setState({ content: text })}
             />   
           
             <TextInput style={styles.input}
             placeholder="Autor:in des Zitats"
             underlineColorAndroid="transparent"
             onChangeText={text => this.setState({ author: text })}
             />
            <Button title="Speichern" onPress={this.props.onSave} />
            </View>
        </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
    },
    input: {
        borderWidth: 1,
        borderColor: "deepskyblue",
        borderRadius: 4,
        fontSize: 20,
        width: '80%',
        marginBottom: 20,
        padding: 10,
        height: 50,
    }
})
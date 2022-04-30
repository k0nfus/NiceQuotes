import React, { Component } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

export default class NewQuote extends Component {
    render() {
        // this.props.onSave
        return (
        <Modal visible={this.props.visible}
        onRequestClose={this.props.onSave}
        animationType="slide"
        >
            <View style={styles.container}>
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
    justifyContent: 'center',
    }
})
// import-Anweisungen
import React, { Component } from 'react'; // React Native basiert auf React
import { StyleSheet, Text, View } from 'react-native';
// APIs und Komponenten
// eigene Komponenten

// Deklaration einer Kompenente (hier als Klasse) 
export default class App extends Component {
  // Darstellung im UI
  render() {
    return (
      // JSX
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

// Styles für Aussehen und Layout
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// import-Anweisungen
import React, { Component } from 'react'; // React Native basiert auf React
import { Button, StyleSheet, Text, View } from 'react-native';
import { textDecorationColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
// APIs und Komponenten
// eigene Komponenten

// Deklaration einer Kompenente (hier als Klasse) 
export default class App extends Component {
  // Darstellung im UI
  render() {
    return (
      // JSX
      <View style={styles.container}>
        <Text>Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.</Text>
        <Text>-- Albert Einstein</Text>
        <Button title="Nächstes Zitat" onPress={() => alert('Es klappt!')}/>
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
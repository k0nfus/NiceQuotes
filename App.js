import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const data = [
{text: 'Hallo Welt', author: '-- Ein junger Programmierer'},
{text: 'Der Mensch ist das Problem.', author: '-- Jan Jürgens'},
{text: 'Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.', author: '-- Albert Einstein'},
];

export default class App extends Component {

  render() {
    const quote = data[2];

    return (

      <View style={styles.container}>
        <Text>
          {quote.text}
        </Text>
        <Text>
          {quote.author}
        </Text>
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
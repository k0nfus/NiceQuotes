import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const data = [
{text: 'Hallo Welt', author: '-- Peter Pan'},
{text: 'Der Mensch ist das Problem.', author: '-- Jan Jürgens'},
{text: 'Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.', author: '-- Albert Einstein'},
{text: 'Zitat 1', author: '-- Autor'},
{text: 'Zitat 2', author: '-- Autor'},
{text: 'Zitat 3', author: '-- Autor'},
{text: 'Zitat 4', author: '-- Autor'},
];

export default class App extends Component {
  state = { index: 0 }; //initialer Zustand

  render() {
    let index = this.state.index;
    const quote = data[index];
    let nextIndex = index + 1;
    if(nextIndex === data.length) nextIndex = 0;
    let prevIndex = index -1;
    if(prevIndex === -1) prevIndex = data.length - 1;
    return (

      <View style={styles.container}>
        <Text>
          {quote.text}
        </Text>
        <Text>
          {quote.author}
        </Text>
        <Button title="Nächstes Zitat" onPress={() => this.setState({ index: nextIndex })}/>
        <Button title="Voriges Zitat" onPress={() => this.setState({ index: prevIndex })}/>
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
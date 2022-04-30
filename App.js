import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Quote from './js/components/Quote'

const data = [
{text: 'Hallo Welt', author: 'Peter Pan'},
{text: 'Der Mensch ist das Problem.', author: 'Jan Jürgens'},
{text: 'Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.', author: 'Albert Einstein'},
{text: 'Zitat 1', author: 'Autor'},
{text: 'Zitat 2', author: 'Autor'},
{text: 'Zitat 3', author: 'Autor'},
{text: 'Zitat 4', author: 'Autor'},
];

export default class App extends Component {
  state = { index: 0 };

  render() {
    let index = this.state.index;
    const quote = data[index];
    let nextIndex = index + 1;
    if(nextIndex === data.length) nextIndex = 0;
    let prevIndex = index -1;
    if(prevIndex === -1) prevIndex = data.length - 1;
    return (

      <View style={styles.container}>
        <Quote text={quote.text} author={quote.author}/>
        <View style={{position: 'absolute', bottom: 0, right: 0}}>
          <Button title="Nächstes Zitat" onPress={() => this.setState({ index: nextIndex })}/>
        </View>
        <View style={{position: 'absolute', bottom: 0, left: 0}}>
          <Button title="Voriges Zitat" onPress={() => this.setState({ index: prevIndex })}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
});
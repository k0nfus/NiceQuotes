import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Quote from './js/components/Quote'
import NewQuote from './js/components/NewQuote';

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
  state = { index: 0, showNewQuoteScreen: false };

  // Pfeilfunktion wg. this.
_addQuote = () => {
  this.setState({ showNewQuoteScreen: false });
}
  render() {
    let index = this.state.index;
    const quote = data[index];
    let nextIndex = index + 1;
    if(nextIndex === data.length) nextIndex = 0;
    let prevIndex = index -1;
    if(prevIndex === -1) prevIndex = data.length - 1;
    return (

      <View style={styles.container}>
        <View style={styles.buttonnew}>
          <Button title="Neues Zitat" onPress={() => this.setState({showNewQuoteScreen: true})}/>
        </View>
        <NewQuote visible={this.state.showNewQuoteScreen}
        onSave={this._addQuote}/>
        <Quote text={quote.text} author={quote.author}/>
        <View style={styles.buttonnext}>
          <Button title=">>" onPress={() => this.setState({ index: nextIndex })}/>
        </View>
        <View style={styles.buttonprev}>
          <Button title="<<" onPress={() => this.setState({ index: prevIndex })}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonnext: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  buttonprev: {
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  buttonnew: {
    position: 'absolute',
    top: 39,
    right: 0,
  },
});
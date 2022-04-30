import React, { Component } from 'react';
import { Button, StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import Quote from './js/components/Quote'
import NewQuote from './js/components/NewQuote';

const data = [
{text: 'Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.', author: 'Albert Einstein'},
];

export default class App extends Component {
  state = { index: 0, showNewQuoteScreen: false, quotes: data };

  // Pfeilfunktion wg. this.
_addQuote = (text, author) => {
  let { quotes } = this.state;
  if(text && author) {
  quotes.push({ text, author });
  }
  this.setState({ showNewQuoteScreen: false, quotes });
}
  render() {
    let { index, quotes } = this.state;
    const quote = quotes[index];
    let nextIndex = index + 1;
    if(nextIndex === quotes.length) nextIndex = 0;
    let prevIndex = index -1;
    if(prevIndex === -1) prevIndex = data.length - 1;
    return (

      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
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
    bottom: Platform.OS === 'ios' ? 20 : 0,
    right: 0,
  },
  buttonprev: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 20 : 0,
    left: 0
  },
  buttonnew: {
    position: 'absolute',
    top: 39,
    right: 0,
  },
});

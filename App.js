import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './components/Header.js';
import ToDoList from './components/ToDoList.js';

export default class App extends React.Component {
  render() {
    return(
      <View style = { styles.container }>
        <Header />
        {/* <NewToDo /> */}
        <ToDoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(0,0%,95%)'
  },
})

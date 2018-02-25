import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet } from 'react-native';

import Header from './components/Header.js';
import ToDoList from './components/ToDoList.js';
import NewToDo from './components/NewToDo.js';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  addToDo = text => {
    newToDo = {
      key: new Date(),
      todo: text,
      pending: true
    }
    this.setState({
      todos: [newToDo, ...this.state.todos]
    })
  }

  toggleStatus = index => {
    let { todos } = this.state;
    todos[index].pending = !todos[index].pending;
    this.setState({ todos })
  }

  removeToDo = index => {
    let { todos } = this.state;
    todos.splice(index, 1)
    this.setState({ todos });
  }

  render() {
    return(
      <KeyboardAvoidingView
        style = { styles.container }
        behavior = { 'padding' }
      >
        <Header />
        <ToDoList
          todos = { this.state.todos }
          toggleStatus = { this.toggleStatus }
          removeToDo = { this.removeToDo }
        />
        <NewToDo
          addToDo = { this.addToDo }
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(0,0%,95%)',
  },
})

import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, AsyncStorage, StatusBar } from 'react-native';

import Header from './components/Header.js';
import ToDoList from './components/ToDoList.js';
import NewToDo from './components/NewToDo.js';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { todos: [] }
  }

  componentWillMount() {
    this.load();
  }

  save = async () => {
    try {
      await AsyncStorage.setItem('TODOS', JSON.stringify(this.state));
    } catch (e) {
      console.error('Could not save todos');
    }
  }

  load = async () => {
    try {
      const todos = await AsyncStorage.getItem('TODOS');
      if (todos !== null) {
        this.setState({ todos: JSON.parse(todos).todos })
      }
    } catch (e) {
      console.error('Could not load todos');
    }
  }

  addToDo = text => {
    let { todos } = this.state;
    newToDo = {
      key: new Date(),
      todo: text,
      pending: true
    }
    todos.push(newToDo)
    this.setState({
      todos
    })
    this.save();
  }

  toggleStatus = index => {
    let { todos } = this.state;
    todos[index].pending = !todos[index].pending;
    this.setState({ todos })
    this.save();
  }

  removeToDo = index => {
    let { todos } = this.state;
    todos.splice(index, 1)
    this.setState({ todos });
    this.save();
  }

  render() {
    return(
      <KeyboardAvoidingView
        style = { styles.container }
        behavior = { 'padding' }
      >
        <StatusBar
          barStyle = 'light-content'
        />
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

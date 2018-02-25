import React from 'react';
import { ScrollView, Text, FlatList, StyleSheet } from 'react-native';

import ToDo from './ToDo.js';

export default class ToDoList extends React.Component {

  render() {
    const todosToRender = this.props.todos.map(
      (todo, index) => (
        <ToDo
          title = { todo.todo }
          index = { index }
          key = { index }
          pending = { todo.pending }
          toggleStatus = { this.props.toggleStatus }
          removeToDo = { this.props.removeToDo }
        />
      )
    )
    return(
      <ScrollView style = { styles.container }>
        { todosToRender }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  }
})

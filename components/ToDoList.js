import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';

import ToDo from './ToDo.js';

export default class ToDoList extends React.Component {

  constructor() {
    super();

    this.state = {
      todos: [
        {
          key: 0,
          todo: 'blah',
          pending: true,
        },
        {
          key: 1,
          todo: 'Learn React Native',
          pending: true,
        },
        {
          key: 2,
          todo: 'Develop a mobile app',
          pending: true,
        },
        {
          key: 3,
          todo: 'Learn Python',
          pending: true,
        },
        {
          key: 4,
          todo: 'to do',
          pending: true,
        },
        {
          key: 5,
          todo: 'another todo',
          pending: true,
        },
        {
          key: 6,
          todo: 'yet anotehr to do',
          pending: true,
        },
      ]
    }
  }

  toggleStatus = index => {
    let { todos } = this.state;
    todos[index].pending = !todos[index].pending;
    this.setState({ todos })
  }

  render() {
    const todosToRender = this.state.todos.map(
      (todo, index) => (
        <ToDo
          title = { todo.todo }
          index = { index }
          key = { index }
          pending = { todo.pending }
          toggleStatus = { this.toggleStatus }
        />
      )
    )
    return(
      <ScrollView>
        { todosToRender }
      </ScrollView>
    );
  }
}

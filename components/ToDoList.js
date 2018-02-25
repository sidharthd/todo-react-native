import React from 'react';
import { View, Text, FlatList } from 'react-native';

import ToDo from './ToDo.js';

export default class ToDoList extends React.Component {

  constructor() {
    super();

    this.state = {
      todos: [
        {
          key: 0,
          todo: 'blah',
          active: true,
        },
        {
          key: 1,
          todo: 'Learn React Native',
          active: true,
        },
        {
          key: 2,
          todo: 'Develop a mobile app',
          active: true,
        },
        {
          key: 3,
          todo: 'Learn Python',
          active: true,
        },
        {
          key: 4,
          todo: 'to do',
          active: true,
        },
        {
          key: 5,
          todo: 'another todo',
          active: true,
        },
        {
          key: 6,
          todo: 'yet anotehr to do',
          active: true,
        },
        {
          key: 7,
          todo: 'yet anotehr to do',
          active: true,
        },
      ]
    }
  }

  markAsDone = index => {
    let { todos } = this.state;
    todos[index].active = false;
    this.setState({ todos })
  }

  renderToDo = ( {item, index} ) => {
    if (item.active) {
      return(
        <ToDo
          title = { item.todo }
          index = { index }
          markAsDone = { this.markAsDone }
        />
      )
    }
  }

  render() {
    const { todos } = this.state;
    return(
      <View>
        <FlatList
          data = { todos }
          renderItem = { this.renderToDo  }
        />
      </View>
    );
  }
}

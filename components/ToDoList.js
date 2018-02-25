import React from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet } from 'react-native';

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
      <View style = { styles.container }>
        {
          todosToRender.length === 0 ?
          <View style = { styles.emptyMessage }>
            <Text style = { styles.emptyMessageText }>You don't have any to do!</Text>
          </View>
          :
          <ScrollView>
            { todosToRender }
          </ScrollView>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  emptyMessage: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessageText: {
    color: 'grey',
    fontSize: 16,
  }
})

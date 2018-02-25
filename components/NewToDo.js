import React from 'react';
import { View, TextInput, StyleSheet, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default class NewToDo extends React.Component {
  constructor() {
    super();
    this.state = { todo: '' }
  }
  addToDo = () => {
    if(this.state.todo.length > 0) {
      this.props.addToDo(this.state.todo);
    }
    this.setState({ todo: '' })
    Keyboard.dismiss();
  }
  render() {
    return(
      <View
        style = { styles.container }
        behavior = { 'padding' }
      >
        <TextInput
          underlineColorAndroid = { 'transparent' }
          placeholder = { 'Enter a todo' }
          style = { styles.input }
          selectionColor = { 'rgba(255, 255, 255, 0.5)' }
          placeholderTextColor = { 'rgba(255, 255, 255, 0.5)' }
          value = { this.state.todo }
          onChangeText = { (text) => {this.setState({ todo: text })} }
          onSubmitEditing = { this.addToDo }
        />
        <MaterialIcons
          name = { 'check' }
          size = { 20 }
          color = { 'white' }
          style = { styles.addButton }
          onPress = { this.addToDo }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'teal',
  },
  input: {
    fontSize: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    color: 'white',
  },
  addButton: {
    position: 'absolute',
    right: 25,
    top: 15
  }
})

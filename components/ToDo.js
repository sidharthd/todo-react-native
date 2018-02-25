import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class ToDo extends React.Component {
  render() {
    return(
      <View style = { styles.container }>
        <MaterialIcons
          name = { this.props.pending? 'check-box-outline-blank' : 'check-box' }
          color = { this.props.pending? 'grey' : 'green' }
          size = { 25 }
          onPress = { () => { this.props.toggleStatus(this.props.index) } }
        />
        <Text style = { styles.text }>
          { this.props.title }
        </Text>
        <MaterialIcons
          name = { 'clear' }
          size = { 25 }
          color = { 'grey' }
          style = { styles.clear }
          onPress = { () => { this.props.removeToDo(this.props.index) } }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
  text: {
    fontSize: 20,
  },
  clear: {
    position: 'absolute',
    right: 10,
    top: 11
  }
})

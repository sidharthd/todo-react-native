import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class ToDo extends React.Component {
  render() {
    return(
      <View style = { styles.container }>
        <MaterialIcons
          name = { 'check-box-outline-blank' }
          size = { 25 }
          color = { 'grey' }
          onPress = { () => { this.props.markAsDone(this.props.index) } }
        />
        <Text style = { styles.text }>
          { this.props.title }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  }
})

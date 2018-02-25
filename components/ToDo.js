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

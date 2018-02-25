import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Header = () => {
  return(
    <View style = { styles.container } >
      <Text style = { styles.text }>
        To Do
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'teal',
    paddingTop: 30,
    paddingBottom: 15,
  },
  text: {
    fontSize: 20,
    color: 'white',
  }
})

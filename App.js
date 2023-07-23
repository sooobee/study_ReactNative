import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
 
export default function App() {
  return (
    <View style ={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style = {styles.TextInput} placeholder = "Your course goal!"/>
        <Button title = "Add Goal"/> 
     </View>
    <View>
      <Text>List of goals...</Text>
    </View>
  </View>
  );  
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 70,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    padding: 8}
})
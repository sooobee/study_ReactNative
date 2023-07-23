import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style ={styles.appContainer}>
      <View style={styles.inputContainer}>
          <TextInput style = {styles.TextInput} placeholder = "Your course goal!"/>
          <Button title = "Add Goal"/> 
      </View>

      <View style = {styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  // 전체 뷰
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },

  // textInput과 button을 묶는 뷰
  inputContainer: {
    flex: 1, // 모든 공간 차지
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottonWidth: 3,
  },

  // 인풋 뷰
  TextInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
}) 
import {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';

export default function App() {
  // enteredGoalText의 초기값을 '' 로 설정
  // setEnteredGoalText를 이용해 값 변경 가능
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    // enteredText를 enteredGoalText로 설정(setEnteredGoalText의 매개변수)
    setEnteredGoalText(enteredText); 
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, 
      enteredGoalText, 
    ]); // 입력된 값을 누적
  }

  return (
    <View style ={styles.appContainer}>
      <View style={styles.inputContainer}>
          <TextInput style = {styles.TextInput} 
          placeholder = "Your course goal!"
          // 텍스트를 입력하면 함수 실행
          onChangeText={goalInputHandler}
          />
          <Button 
          title = "Add Goal"
          // 버튼을 클릭하면 함수 실행
          onPress={addGoalHandler}/> 
      </View>

      {/* corseGoal 내부를 돌면서 goal을 출력해줌, 여기서 고유한 key값 설정 필요*/}
      <View style = {styles.goalsContainer}>
        <ScrollView alwaysBounceVertical = {false}>
          {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
            ))}
        </ScrollView> 
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
  },
  goalItem:{
    margin: 8,
    padding: 8,
    borderRadius:6,
    backgroundColor: "#5e0acc",
  },
  goalText:{
    color: 'white'
  }
}) 
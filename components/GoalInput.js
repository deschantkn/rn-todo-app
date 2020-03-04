import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.actions}>
          <View style={styles.button}><Button title="CANCEL" color="red" onPress={props.onCancel} /></View>
          <View style={styles.button}><Button title="ADD" onPress={addGoalHandler} /></View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  actions: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;

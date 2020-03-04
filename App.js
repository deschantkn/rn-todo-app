import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTittle) => {
    if (goalTittle.length === 0) return;
    setCourseGoals((currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTittle }]));
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  };

  const cancelAddGoalHandler = () => setIsAddMode(false);

  return (
    <View style={styles.screen}>
      <Button title="New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelAddGoalHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={removeGoalHandler} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

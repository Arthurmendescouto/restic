import React from 'react';
import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Task } from './src/components/Task';
import { CardNumber } from './src/components/CardHouse';
import { InputAddTask } from './src/components/InputAddTask/index';
import { useState } from 'react';

export default function App() {
  const[tasks,setTasks]=useState<{description: string; string; check: Boolean}[]>([]);
  const[taskText,setTaskText]=useState('')

  return (
    <View style={styles.container}>  
      <CardNumber /> 
      <InputAddTask />  
      
      <FlatList 
      data={tasks}
      keyExtractor={(item, index)=> index.toString()}
      renderItem={
        ({item})=>{
          <Task/>
        }
      }
      ListEmptyComponent={()=>(
        <View>
          <Text>Você ainda não cadastrou tarefas!</Text>
          <Text>Crie uma tarefa para começar </Text>
        </View>
      )}
      />

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding:16,
    gap:16,
  },
});

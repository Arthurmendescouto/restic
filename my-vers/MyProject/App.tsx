import React, { useEffect, useState } from 'react';
import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Task } from './src/components/Task';
import { CardHouse } from './src/components/CardHouse';
import Feather from 'react-native-vector-icons/Feather';
import { InputAddTask } from './src/components/InputAddTask';

export default function App() {
  const [tasks, setTasks] = useState<{ description: string; check: boolean }[]>([]);
  const [taskText, setTaskText] = useState('');

  function handleTaskAdd() {
    console.log('Task Text:', taskText); // Adicionei um console.log para depuração
    if (taskText.trim().length === 0) { // Verifica se o texto está vazio ou apenas com espaços
      Alert.alert('Erro', 'Coloque uma tarefa!');
      return;
    }
    if (tasks.some((task) => task.description === taskText)) {
      Alert.alert('Erro', 'Tarefa já existe!');
      return;
    }

    const newTask = { description: taskText, check: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
  }

  function handleTaskChangeStatus(taskToChange) {
    // Atualiza o status da tarefa clicada e mantém as outras inalteradas
    const updateTasks=tasks.map(task=>{
      if(task.description===taskToChange.description){
        return{ ...task,check:!task.check}
      } else{
        return task
      }
    })
    setTasks(updateTasks);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <CardHouse /> 
      <InputAddTask onPress={handleTaskAdd} OnchangeText={setTaskText} value={taskText} /> 
      
      <FlatList 
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Task title={item.description} status={item.check}
          onCheck={()=>handleTaskChangeStatus(item)} />
        )}
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.NotificationText}>Você ainda não cadastrou tarefas!</Text>
            <Text style={styles.NotificationText}>Crie uma tarefa para começar</Text>
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
    padding: 16,
    gap: 16,
  },
  NotificationText: {
    color: '#ffffff',
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: '#252627',
  },
  input: {
    flex: 1,
    padding: 16,
    color: '#ffffff',
  },
  inputButton: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 4,
  },
});
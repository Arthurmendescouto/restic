import React, { useEffect, useState } from 'react';
import "@expo/metro-runtime";
import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Task } from '../../components/Task';
import { CardHouse } from '../../components/CardHouse';
import { InputAddTask } from '../../components/InputAddTask';

type TaskType={
    description:string;
    check:Boolean;
}

export default function Home() {
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

  function handleTaskChangeStatus(taskToChange:TaskType) {
    // Atualiza o status da tarefa clicada e mantém as outras inalteradas
    const updatedTasks = tasks.map(task =>
      task.description === taskToChange.description
        ? { ...task, check: !task.check }
        : task
    );
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      
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
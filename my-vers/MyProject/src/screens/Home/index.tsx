import React, { useState } from 'react';
import "@expo/metro-runtime";
import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import { Task } from '../../components/Task';
import { CardHouse } from '../../components/CardHouse';
import { InputAddTask } from '../../components/InputAddTask';

type TaskType = {
    id: string; // Adiciona a propriedade ID
    description: string;
    check: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskText, setTaskText] = useState('');

  function handleTaskAdd() {
    console.log('Task Text:', taskText);
    if (taskText.trim().length === 0) {
      Alert.alert('Erro', 'Coloque uma tarefa!');
      return;
    }
    if (tasks.some((task) => task.description === taskText)) {
      Alert.alert('Erro', 'Tarefa já existe!');
      return;
    }

    const newTask: TaskType = {
      id: Math.random().toString(), // Gera um ID único
      description: taskText,
      check: false
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  }

  function handleTaskChangeStatus(taskToChange: TaskType) {
    const updatedTasks = tasks.map(task =>
      task.id === taskToChange.id // Usa o ID para identificar a tarefa
        ? { ...task, check: !task.check }
        : task
    );
    setTasks(updatedTasks);
  }

  function handleTaskRemove(id: string) {
    setTasks(tasks.filter(task => task.id !== id)); // Remove a tarefa
  }

  return (
    <View style={styles.container}>
      <CardHouse /> 
      <InputAddTask onPress={handleTaskAdd} OnchangeText={setTaskText} value={taskText} /> 
      
      <FlatList 
        data={tasks}
        keyExtractor={(item) => item.id} // Usa o ID como chave
        renderItem={({ item }) => (
          <Task 
            id={item.id} // Passa o ID aqui
            title={item.description} 
            status={item.check}
            onCheck={() => handleTaskChangeStatus(item)} 
            onRemove={() => handleTaskRemove(item.id)} // Passa a função de remoção
          />
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
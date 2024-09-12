import React, { useEffect } from 'react';
import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Task } from './src/components/Task';
import { CardNumber } from './src/components/CardHouse';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [tasks, setTasks] = useState<{ description: string; check: boolean }[]>([]);
  const [taskText, setTaskText] = useState('');
  const [countTask, setCountTask] = useState(0);

  function handleTaskAdd() {
    if (taskText.trim() === '') {
      return Alert.alert('Erro', 'Tarefa está sem descrição');
    }
    if (tasks.some((task) => task.description === taskText.trim())) {
      return Alert.alert('Erro', 'Tarefa já existe!');
    }
    const newTask = { description: taskText.trim(), check: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
  }

  useEffect(() => {
    setCountTask(tasks.length);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <CardNumber />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Digite a tarefa'
          placeholderTextColor={"white"}
          keyboardType='default'
          onChangeText={setTaskText}
          value={taskText}
          onSubmitEditing={handleTaskAdd} // Adicionado para permitir adicionar tarefa ao pressionar Enter
        />
        <TouchableOpacity style={styles.InputButton} onPress={handleTaskAdd}>
          <Feather name="plus-square" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View>
      <Text style={styles.text}>Tarefas: {countTask}</Text>
      <View style={styles.taskListContainer}> {/* Contêiner para a FlatList */}
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Task description={item.description} check={item.check} />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Text style={styles.text}>Você ainda não cadastrou tarefas!</Text>
              <Text style={styles.text}>Crie uma tarefa para começar </Text>
            </View>
          )}
        />
        </View>
      </View>
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
    paddingTop: 64,
    gap: 16,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: '#1e1e1e',
    width: '100%',
  },
  input: {
    flex: 1,
    padding: 16,
    color: '#FFFFFF'
  },
  InputButton: {
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 4,
  },
  taskListContainer: {
    flex: 1,
    width: '100%', // Garantir que o contêiner use 100% da largura
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasks:{
    justifyContent: 'flex-start',
    flexDirection:'column',

  }
});

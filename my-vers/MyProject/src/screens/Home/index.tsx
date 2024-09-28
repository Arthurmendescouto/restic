import React, { useState, useContext } from "react";
import { FlatList, StyleSheet, View, Text, Alert } from "react-native";
import { Task } from "../../components/Task";
import { CardHouse } from "../../components/CardHouse";
import { InputAddTask } from "../../components/InputAddTask";
import { TaskContext } from "../../context/TaskContext";
import { TaskProps } from "../../utils/types"; // Importando TaskProps

export default function Home() {
  const { tasks, setTasks, createTask } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");

  function handleTaskAdd() {
    console.log("Task Text:", taskText);
    if (taskText.trim().length === 0) {
      Alert.alert("Erro", "Coloque uma tarefa!");
      return;
    }
    if (tasks.some((task: TaskProps) => task.title === taskText)) {
      Alert.alert("Erro", "Tarefa já existe!");
      return;
    }

    createTask(taskText); // Adicionando a nova tarefa
    setTaskText(""); // Limpando o campo de texto
  }

  function handleTaskChangeStatus(taskToChange: TaskProps) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskToChange.id ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
  }

  function handleTaskRemove(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <CardHouse />
      <InputAddTask
        onPress={handleTaskAdd}
        OnchangeText={setTaskText}
        value={taskText}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            title={item.title}
            status={item.status}
            onCheck={() => handleTaskChangeStatus(item)}
            onRemove={() => handleTaskRemove(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <View>
            <Text style={styles.NotificationText}>
              Você ainda não cadastrou tarefas!
            </Text>
            <Text style={styles.NotificationText}>
              Crie uma tarefa para começar
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
  NotificationText: {
    color: "#ffffff",
  },
});

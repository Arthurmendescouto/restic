import React, { useContext, useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { TaskContext } from "../context/TaskContext";
import { TaskProps } from "../utils/types";

type TasksRouteProp = RouteProp<
  { Tasks: { category: string; color: string } },
  "Tasks"
>;

export default function Tasks() {
  const route = useRoute<TasksRouteProp>();
  const navigation = useNavigation();
  const { category, color } = route.params;
  const { tasks, addTask, updateTaskStatus, removeTask } =
    useContext(TaskContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const categoryTasks = tasks[category] || [];

  const handleAddTask = () => {
    if (newTaskTitle.trim().length === 0) {
      Alert.alert("Erro", "Por favor, insira um título para a tarefa.");
      return;
    }
    addTask(category, newTaskTitle);
    setNewTaskTitle("");
  };

  const handleToggleTask = (taskId: string) => {
    updateTaskStatus(category, taskId);
  };

  const handleRemoveTask = (taskId: string) => {
    Alert.alert(
      "Remover Tarefa",
      "Tem certeza que deseja remover esta tarefa?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Remover", onPress: () => removeTask(category, taskId) },
      ]
    );
  };

  const renderItem = ({ item }: { item: TaskProps }) => (
    <View style={[styles.taskItem, { backgroundColor: color }]}>
      <TouchableOpacity
        onPress={() => handleToggleTask(item.id)}
        style={styles.taskCheckbox}
      >
        {item.status && <View style={styles.taskCheckboxInner} />}
      </TouchableOpacity>
      <Text
        style={[styles.taskTitle, item.status && styles.taskTitleCompleted]}
      >
        {item.title}
      </Text>
      <TouchableOpacity
        onPress={() => handleRemoveTask(item.id)}
        style={styles.removeButton}
      >
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Feather name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={[styles.title, { color: color }]}>{category}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa"
          placeholderTextColor="#999"
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categoryTasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhuma tarefa adicionada</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    color: "#ffffff",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",

    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#4CAF50",
    borderRadius: 12,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  taskCheckboxInner: {
    width: 12,
    height: 12,
    backgroundColor: "#4CAF50",
    borderRadius: 6,
  },
  taskTitle: {
    flex: 1,
    color: "#ffffff",
    fontSize: 16,
  },
  taskTitleCompleted: {
    textDecorationLine: "line-through",
    color: "#888888",
  },
  removeButton: {
    padding: 5,
  },
  removeButtonText: {
    color: "#FF0000",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyText: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
  },
});

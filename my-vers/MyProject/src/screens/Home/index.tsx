import React, { useState, useContext } from "react";
import { FlatList, StyleSheet, View, Text, Alert } from "react-native";
import { Task } from "../../components/Task";
import  {CardHouse}  from "../../components/CardHouse";
import { InputAddTask } from "../../components/InputAddTask";
import { TaskContext } from "../../context/TaskContext";
import { TaskProps } from "../../utils/types"; // Importando TaskProps

import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Home() {
  const { tasks, setTasks, createTask } = useContext(TaskContext);
  const [taskText, setTaskText] = useState("");

  function handleTaskAdd(text: string) { // Alterado para aceitar o texto da tarefa
    console.log("Task Text:", text);
    if (text.trim().length === 0) {
      Alert.alert("Erro", "Coloque uma tarefa!");
      return;
    }
    if (tasks.some((task: TaskProps) => task.title === text)) {
      Alert.alert("Erro", "Tarefa já existe!");
      return;
    }

    createTask(text); // Adicionando a nova tarefa
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

  // Função para lidar com o evento onBlur
  function handleBlur() {
    // Lógica que você deseja executar ao perder o foco (pode ser vazia)
  }

  return (
    <View style={styles.container}>
      <CardHouse />
      
      <Formik
        initialValues={{ taskText: '' }}
        validationSchema={Yup.object().shape({
          taskText: Yup.string().required('A tarefa é obrigatória'),
        })}
        onSubmit={(values, { resetForm }) => {
          handleTaskAdd(values.taskText); // Chama a função com o valor da tarefa
          resetForm({ values: { taskText: '' } });
        }}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <InputAddTask
              onPress={handleSubmit} // Chama o handleSubmit do Formik
              OnchangeText={handleChange('taskText')}
              value={values.taskText}
              onBlur={handleBlur} // Adicionando a propriedade onBlur
            />
            {errors.taskText && <Text style={styles.errorText}>{errors.taskText}</Text>}
          </>
        )}
      </Formik>

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
  errorText: {
    color: 'red',
    marginTop: 8,
  },
});
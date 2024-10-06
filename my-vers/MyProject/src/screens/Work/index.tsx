import React, { useState, useContext } from "react";
import { FlatList, StyleSheet, View, Text, Alert } from "react-native";
import { Task } from "../../components/Task";
import { CardHouse } from "../../components/CardHouse";
import { InputAddTask } from "../../components/InputAddTask";
import { TaskContext } from "../../context/TaskContext";
import { TaskProps } from "../../utils/types"; // Importando TaskProps
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CardWork } from "../../components/CardWork";

export default function Home() {
  const { tasks, setTasks, createTask } = useContext(TaskContext);
  const [duplicateError, setDuplicateError] = useState(''); // Estado para gerenciar erros de duplicação

  function handleTaskAdd(text: string) {
    if (text.trim().length === 0) {
      Alert.alert("Erro", "Coloque uma tarefa!");
      return false;
    }
    if (tasks.some((task: TaskProps) => task.title === text)) {
      setDuplicateError('Tarefa já existe!'); // Define a mensagem de erro de duplicação
      return false;
    }

    setDuplicateError(''); // Reseta a mensagem de erro de duplicação
    createTask(text);
    return true;
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
      

      <Formik
        initialValues={{ taskText: '' }}
        validationSchema={Yup.object().shape({
          taskText: Yup.string()
            .min(4, 'A tarefa deve ter pelo menos 5 letras')
            .max(20, 'A tarefa deve ter no máximo 20 letras')
            .required('A tarefa é obrigatória'),
        })}
        onSubmit={(values, { resetForm }) => {
          if (handleTaskAdd(values.taskText)) {
            resetForm(); // Limpa o formulário
            setDuplicateError(''); // Reseta a mensagem de erro de duplicação ao enviar uma nova tarefa
          }
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <InputAddTask
              onPress={handleSubmit}
              OnchangeText={(text) => {
                handleChange('taskText')(text); // Atualiza o texto
                // Limpa o erro de duplicação se o texto não for mais duplicado
                if (duplicateError && !tasks.some((task: TaskProps) => task.title === text)) {
                  setDuplicateError('');
                }
              }}
              value={values.taskText}
              onBlur={() => touched.taskText = true} // Marca como tocado ao sair do campo
            />
            {touched.taskText && errors.taskText && (
              <Text style={styles.errorText}>{errors.taskText}</Text>
            )}
            {duplicateError && (
              <Text style={styles.duplicateErrorText}>{duplicateError}</Text> // Mensagem de erro de duplicação
            )}
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
  duplicateErrorText: {
    color: 'red',
    marginTop: 8,
  },
});

import React, { createContext, useState, ReactNode, useEffect } from "react";
import { TaskProps } from "../utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface TaskContextProps {
  task: TaskProps;
  selectTask: (task: TaskProps) => void;
  clearTask: () => void;
  tasks: TaskProps[];
  createTask: (title: string,tag:string) => void;
  setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>; // Adicionado
}

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
  task: { id: "0", title: "", status: false,tag:"" },
  selectTask: () => {},
  tasks: [],
  clearTask: () => {},
  setTasks: () => {},
  createTask: () => {},
});
export function TaskProvider({ children }: TaskProviderProps) {
  const [task, setTask] = useState<TaskProps>({
    id: "0",
    title: "",
    status: false,
    tag:"",
  });
  const [tasks, setTasks] = useState<TaskProps[]>([] as TaskProps[]);

  async function storeTasks(tasks: TaskProps[]) {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (error) {
      console.log(error);
    }
  }

  async function loadTasks() {
    try {
      const tasks = await AsyncStorage.getItem("@tasks");
      if (tasks) {
        setTasks(JSON.parse(tasks));
      }
    } catch (error) {
      console.log(error);
    }
  }

  function createTask(title: string, tag:string) {
    const newTask = {
      id: Math.random().toString(),
      title: title,
      status: false,
      tag
    };
    setTasks([...tasks, newTask]);
  }

  function selectTask(task: TaskProps) {
    setTask(task);
  }

  function clearTask() {
    setTask({ id: "0", title: "", status: false,tag:"" });
  }

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    storeTasks(tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ task, selectTask, clearTask, tasks, createTask, setTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}

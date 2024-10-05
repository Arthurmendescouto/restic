import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskProps } from "../utils/types";

interface CategoryProps {
  id: string;
  name: string;
  color: string;
}

interface TaskContextProps {
  categories: CategoryProps[];
  addCategory: (name: string) => void;
  removeCategory: (categoryId: string) => void;
  updateCategory: (
    categoryId: string,
    updatedCategory: Partial<CategoryProps>
  ) => void;
  tasks: { [category: string]: TaskProps[] };
  addTask: (category: string, title: string) => void;
  updateTaskStatus: (category: string, taskId: string) => void;
  removeTask: (category: string, taskId: string) => void;
  selectedTask: TaskProps | null;
  selectTask: (task: TaskProps) => void;
  clearSelectedTask: () => void;
}

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
  categories: [],
  addCategory: () => {},
  removeCategory: () => {},
  updateCategory: () => {},
  tasks: {},
  addTask: () => {},
  updateTaskStatus: () => {},
  removeTask: () => {},
  selectedTask: null,
  selectTask: () => {},
  clearSelectedTask: () => {},
});

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [tasks, setTasks] = useState<{ [category: string]: TaskProps[] }>({});
  const [selectedTask, setSelectedTask] = useState<TaskProps | null>(null);

  async function storeData() {
    try {
      await AsyncStorage.setItem("@categories", JSON.stringify(categories));
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (error) {
      console.log(error);
    }
  }

  async function loadData() {
    try {
      const storedCategories = await AsyncStorage.getItem("@categories");
      const storedTasks = await AsyncStorage.getItem("@tasks");
      if (storedCategories) setCategories(JSON.parse(storedCategories));
      if (storedTasks) setTasks(JSON.parse(storedTasks));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    storeData();
  }, [categories, tasks]);

  const addCategory = (name: string) => {
    const newCategory = {
      id: Date.now().toString(),
      name,
      color: generateRandomColor(),
    };
    setCategories([...categories, newCategory]);
    setTasks({ ...tasks, [name]: [] });
  };

  const removeCategory = (categoryId: string) => {
    const categoryToRemove = categories.find((cat) => cat.id === categoryId);
    if (categoryToRemove) {
      const updatedCategories = categories.filter(
        (cat) => cat.id !== categoryId
      );
      const updatedTasks = { ...tasks };
      delete updatedTasks[categoryToRemove.name];

      setCategories(updatedCategories);
      setTasks(updatedTasks);
    }
  };

  const updateCategory = (
    categoryId: string,
    updatedCategory: Partial<CategoryProps>
  ) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId ? { ...cat, ...updatedCategory } : cat
      )
    );
  };

  const addTask = (category: string, title: string) => {
    const newTask: TaskProps = {
      id: Date.now().toString(),
      title,
      status: false,
    };
    setTasks({
      ...tasks,
      [category]: [...(tasks[category] || []), newTask],
    });
  };

  const updateTaskStatus = (category: string, taskId: string) => {
    setTasks({
      ...tasks,
      [category]: tasks[category].map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      ),
    });
  };

  const removeTask = (category: string, taskId: string) => {
    setTasks({
      ...tasks,
      [category]: tasks[category].filter((task) => task.id !== taskId),
    });
  };

  const selectTask = (task: TaskProps) => {
    setSelectedTask(task);
  };

  const clearSelectedTask = () => {
    setSelectedTask(null);
  };

  return (
    <TaskContext.Provider
      value={{
        categories,
        addCategory,
        removeCategory,
        updateCategory,
        tasks,
        addTask,
        updateTaskStatus,
        removeTask,
        selectedTask,
        selectTask,
        clearSelectedTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

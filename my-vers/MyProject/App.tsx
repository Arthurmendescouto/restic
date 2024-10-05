import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./src/screens/Categories";
import Tasks from "./src/screens/Tasks";
import { TaskProvider } from "./src/context/TaskContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Tasks" component={Tasks} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

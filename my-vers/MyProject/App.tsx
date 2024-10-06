import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./src/screens/Menu"; 
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import { TaskProvider } from "./src/context/TaskContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Menu} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

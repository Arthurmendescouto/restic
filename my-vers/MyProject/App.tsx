import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./src/screens/Menu"; 
import Home from "./src/screens/Home";
import Work from "./src/screens/Work";
import College from "./src/screens/College";
import Details from "./src/screens/Details";
import { TaskProvider } from "./src/context/TaskContext";
import { RootStackParamList } from "./src/utils/types"; // Certifique-se de que isso esteja correto

// Defina o tipo do stack
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={{ headerShown: true }}
        >
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Work" component={Work} />
          <Stack.Screen name="College" component={College} />
          <Stack.Screen name="Details" component={Details} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
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
          screenOptions={{
            headerShown: true,
            headerStyle: { backgroundColor: '#000000' },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen 
            name="Menu" 
            component={Menu} 
            options={{ title: '' }} // Título personalizado para Menu
          />
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ title: 'Casa' }} // Título personalizado para Home
          />
          <Stack.Screen 
            name="Work" 
            component={Work} 
            options={{ title: 'Trabalho' }} // Título personalizado para Work
          />
          <Stack.Screen 
            name="College" 
            component={College} 
            options={{ title: 'Faculdade' }} // Título personalizado para College
          />
          <Stack.Screen 
            name="Details" 
            component={Details} 
            options={{ title: 'Detalhes', headerShown: false }} // Título personalizado para Details e cabeçalho oculto
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}

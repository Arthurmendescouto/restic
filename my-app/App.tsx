import "@expo/metro-runtime";
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View,Text, TextInput, Touchable, TouchableOpacity} from 'react-native';
import{Task} from './src/components/task'
import { CardNumber } from './src/components/CardNumber/index';
import { InputAddTask } from './src/components/InputAddTask/index';
import { useState } from "react";
import { Feather } from '@expo/vector-icons'; 

export default function App() {
  const[tasks,setTasks]=useState<{description: string; check: Boolean}[]>([]);
  const[taskText,setTaskText]=useState('')

  return (
    <View style={styles.container}>  
      <CardNumber /> 
      <InputAddTask />  
      
      <FlatList 
      data={tasks}
      keyExtractor={(item, index)=> index.toString()}
      renderItem={
        ({item})=>
          (<Task/>)
        
      }
      ListEmptyComponent={()=>(
        <View>
          <Text>Você ainda não cadastrou tarefas!</Text>
          <Text>Crie uma tarefa para começar </Text>
        </View>
      )}
      />

      <StatusBar style="auto" />
    </View>
    
  );
}


 //asdf
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28385E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop:64,
    gap:16,
  },
  InputContainer:{
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor:'#252627'
  },
  input: {
    flex:1,
    padding:16,
    color:'#fff'
  },
  InputButton:{
    backgroundColor: '#1E1E1E',
    padding:16,
    borderRadius: 4,
  }
});



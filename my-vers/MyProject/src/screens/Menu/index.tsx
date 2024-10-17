import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de instalar @expo/vector-icons
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../utils/types'; // Importe os tipos definidos
import { useNavigation } from '@react-navigation/native';

// Definindo o tipo de navegação
type MenuScreenProp = StackNavigationProp<RootStackParamList, 'Menu'>;

const Menu = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const navigation = useNavigation<MenuScreenProp>(); // Tipagem correta para o hook de navegação

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const date = now.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' });

      setCurrentTime(time);
      setCurrentDate(date);
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <View style={styles.container}>
      {/* Header sem ícones */}
      <View style={styles.header}>
      
        <Text style={styles.greeting}>Tenha um dia Criativo!</Text>
      </View>

      {/* Campo de pesquisa */}
      {/* <View style={styles.searchContainer}>
      <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar Tarefa"
          placeholderTextColor="#999"
        />
        <Ionicons name="search" size={24} color="#999" style={styles.searchIcon} />
      </View> */}

      {/* Relógio funcional */}
      <View style={styles.clockContainer}>
        <Text style={styles.clockTime}>{currentTime}</Text>
        <Text style={styles.clockDate}>{currentDate}</Text>
      </View>

      {/* Centralizar Caixas de Tarefas */}
      <ScrollView contentContainerStyle={styles.taskContainer}>
        <TouchableOpacity 
          style={styles.taskBarCasa} 
          onPress={() => navigation.navigate('Home')} // Navega para a tela Home
        >
          <Text style={styles.taskBarText}>Casa</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.taskBarTrabalho}
        onPress={() => navigation.navigate('Work')}>
          <Text style={styles.taskBarText}>Trabalho</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.taskBarFaculdade}
        onPress={() => navigation.navigate('College')}>
          <Text style={styles.taskBarText}>Faculdade</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Botão Adicionar Tarefa */}
      {/* <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
  },
  greeting: {
    color: 'white',
    fontSize: 24,
    marginTop: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  subGreeting: {
    color: 'white',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  clockContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  clockTime: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  clockDate: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
  taskContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  taskBarCasa: {
    backgroundColor: '#582fc8',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskBarTrabalho: {
    backgroundColor: '#2626adfe',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskBarFaculdade: {
    backgroundColor: '#228b22',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskBarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0059ff',
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default Menu;

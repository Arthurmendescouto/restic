import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'; // Certifique-se de instalar @expo/vector-icons

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header com ícones e nome do usuário */}
      <View style={styles.header}>
        <View style={styles.icons}>
          <FontAwesome name="th-large" size={24} color="white" />
          <Ionicons name="notifications-outline" size={24} color="white" />
        </View>
        <Text style={styles.greeting}>Oi, <Text style={styles.userName}>Antonio</Text></Text>
        <Text style={styles.subGreeting}>Tenha um dia Criativo!</Text>
      </View>

      {/* Campo de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar Tarefa"
          placeholderTextColor="#999"
        />
        <Ionicons name="search" size={24} color="#999" style={styles.searchIcon} />
      </View>

      {/* Progresso */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Progresso</Text>
        <Text style={styles.progressDetails}>30/40 Concluído</Text>
        <View style={styles.progressCircle}>
          <Text style={styles.progressPercentage}>50%</Text>
        </View>
        <Text style={styles.progressDate}>29 Julho</Text>
      </View>

      {/* Centralizar Caixas de Tarefas */}
      <ScrollView contentContainerStyle={styles.taskContainer}>
        <TouchableOpacity style={styles.taskBarCasa}>
          <Text style={styles.taskBarText}>Casa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskBarTrabalho}>
          <Text style={styles.taskBarText}>Trabalho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.taskBarFaculdade}>
          <Text style={styles.taskBarText}>Faculdade</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Botão Adicionar Tarefa */}
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    justifyContent: 'space-between', // Centraliza o conteúdo verticalmente
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  searchIcon: {
    marginLeft: 10,
  },
  progressContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  progressText: {
    color: 'white',
    fontSize: 18,
  },
  progressDetails: {
    color: 'white',
    marginTop: 10,
    fontSize: 16,
  },
  progressCircle: {
    marginTop: 10,
    backgroundColor: '#333',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressPercentage: {
    color: '#00f',
    fontSize: 20,
  },
  progressDate: {
    color: 'white',
    marginTop: 10,
  },
  taskContainer: {
    justifyContent: 'center', // Centraliza as tarefas verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    marginVertical: 20, // Ajuste a margem vertical para centralização
  },
  taskBarCasa: {
    backgroundColor: '#7e51ff',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskBarTrabalho: {
    backgroundColor: '#4ba3fa',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskBarFaculdade: {
    backgroundColor: '#3dd598',
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
    backgroundColor: '#00f',
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20, // Ajusta o espaçamento inferior para centralizar melhor
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default App;
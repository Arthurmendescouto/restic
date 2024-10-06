import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Casa = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header com título e botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Trabalho</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fundo preto
  },
  header: {
    width: '100%', // Ocupar toda a largura da tela
    backgroundColor: '#734ed7', // Cor roxa
    borderBottomLeftRadius: 30, // Bordas arredondadas inferiores
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o título
    paddingVertical: 40, // Altura ajustada para cobrir corretamente
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150, // Altura total da barra
  },
  backButton: {
    position: 'absolute',
    left: 20, // Posição da seta à esquerda
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Casa;

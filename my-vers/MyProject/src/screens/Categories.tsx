import React, { useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  StatusBar,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { TaskContext } from "../context/TaskContext";
import Icon from "react-native-vector-icons/MaterialIcons";

type RootStackParamList = {
  Categories: undefined;
  Tasks: { category: string; color: string };
};

interface CategoryItem {
  id: string;
  name: string;
  color: string;
}

export default function Categories() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { categories, addCategory, removeCategory } = useContext(TaskContext);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim().length === 0) {
      Alert.alert("Erro", "Por favor, insira um nome para a categoria.");
      return;
    }
    if (categories.some((category) => category.name === newCategory)) {
      Alert.alert("Erro", "Esta categoria já existe.");
      return;
    }
    addCategory(newCategory);
    setNewCategory("");
    // navigation.navigate("Tasks", { category: newCategory });
  };

  const handleRemoveCategory = (categoryId: string, categoryName: string) => {
    Alert.alert(
      "Remover Categoria",
      `Tem certeza que deseja remover a categoria "${categoryName}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          onPress: () => {
            removeCategory(categoryId);
          },
          style: "destructive",
        },
      ]
    );
  };

  const renderCategoryItem = ({ item }: { item: CategoryItem }) => (
    <View style={styles.categoryItemContainer}>
      <TouchableOpacity
        style={[styles.categoryItem, { backgroundColor: item.color }]}
        onPress={() =>
          navigation.navigate("Tasks", {
            category: item.name,
            color: item.color,
          })
        }
      >
        <Text style={styles.categoryText}>{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleRemoveCategory(item.id, item.name)}
      >
        <Icon name="delete" size={24} color="#FFf" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nova categoria"
          value={newCategory}
          onChangeText={setNewCategory}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddCategory}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>Nenhuma categoria adicionada</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    color: "#ffffff",
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  categoryItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryItem: {
    flex: 1,

    padding: 15,
    borderRadius: 5,
  },
  categoryText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    padding: 10,
    marginLeft: 10,
  },
  emptyText: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
  },
});

import { useProductContext } from "@/context/ProductContext";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput } from "react-native";

export default function AdminScreen() {
  const { addProduct } = useProductContext();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  function saveProduct() {
    if (!name || !price || !image) {
      alert("Preencha tudo");
      return;
    }

    addProduct({
      id: Date.now().toString(),
      name,
      price: Number(price),
      image,
    });

    // Limpar campos
    setName("");
    setPrice("");
    setImage(null);
    alert("Produto adicionado com sucesso!");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Adicionar Produto</Text>

      <TextInput
        placeholder="Nome do produto"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Preço"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Button title="Escolher imagem" onPress={pickImage} />

      {image && <Image source={{ uri: image }} style={styles.preview} />}

      <Button title="Salvar Produto" onPress={saveProduct} color="green" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  preview: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignSelf: "center",
  },
});

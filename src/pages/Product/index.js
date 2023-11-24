import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";
import DarkMode from "../../components/DarkMode";
import { useNavigation } from "@react-navigation/native";

export default function Product({ route }) {
  const { produto } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <DarkMode />
      <Image source={{ uri: produto.imagem }} style={styles.image} />
      <Text style={styles.name}>{produto.nome}</Text>
      <Text style={styles.price}>$ {produto.valor_unitario}</Text>
      <Text style={styles.description}>{produto.descricao}</Text>
      <Pressable
        onPress={() =>
          navigation.navigate("EditarProduto", {
            produto: produto,
          })
        }
      >
        <Text>Editar</Text>
      </Pressable>
      <Footer />
    </View>
  );
}

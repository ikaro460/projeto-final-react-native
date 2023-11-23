import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Product({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.imagem }} style={styles.image} />
      <Text style={styles.name}>{produto.nome}</Text>
      <Text style={styles.price}>$ {produto.valor_unitario}</Text>
      <Text style={styles.description}>{produto.descricao}</Text>
    </View>
  );
}

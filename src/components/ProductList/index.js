import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import ProductCard from "../ProductCard";
import { FlatList, StyleSheet, View } from "react-native";

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);

  const getProdutos = async () => {
    try {
      const { data } = await api.get("produto");
      console.log(data);
      setProdutos(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.prodList}
        renderItem={({ item }) => (
          <ProductCard style={styles.item} produto={item} />
        )}
        data={produtos}
        keyExtractor={(p) => p.id_produto}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  prodList: {
    width: "100%",
  },
});

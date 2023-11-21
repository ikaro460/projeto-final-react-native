import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import ProductCard from "../ProductCard";
import { FlatList, StyleSheet, View } from "react-native";
import { styles } from "./style";

export default function ProductList({ theme }) {
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
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={styles.productList}
        data={produtos}
        renderItem={({ item }) => (
          <ProductCard
            produto={item}
            theme={theme}
            avaliacao={Math.floor(Math.random() * 5) + 1}
          />
        )}
        keyExtractor={(p) => p.id_produto}
        numColumns={2}
      />
    </View>
  );
}

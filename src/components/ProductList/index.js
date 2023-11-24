import React, { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import ProductCard from "../ProductCard";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { styles } from "./style";
import { AuthContext } from "../../context/AuthContext";

export default function ProductList() {
  const { produtos, loadProdutosFromServer } = useContext(AuthContext);

  return (
    <View style={styles.listContainer}>
      {produtos ? (
        <FlatList
          contentContainerStyle={styles.productList}
          data={produtos}
          renderItem={({ item }) => (
            <ProductCard
              produto={item}
              avaliacao={Math.floor(Math.random() * 5) + 1}
            />
          )}
          keyExtractor={(p) => p.id_produto}
          numColumns={2}
        />
      ) : (
        <Text>Loading ...</Text>
      )}
    </View>
  );
}

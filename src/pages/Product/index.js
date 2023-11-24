import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";
import DarkMode from "../../components/DarkMode";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../components/Footer/index.js";
import { AuthContext } from "../../context/AuthContext.js";
import { globalStyle } from "../../styles/global.js";
import { api } from "../../services/api.jsx";

export default function Product({ route }) {
  const { theme, loadProdutosFromServer } = useContext(AuthContext);
  const { produto } = route.params;
  const navigation = useNavigation();

  const excluirProduto = async () => {
    try {
      const response = await api.delete(`/produto/${produto.id_produto}`);
      // Handle success
      console.log(`Item with ID ${produto.id_produto} deleted successfully`);
      console.log("Response:", response.data);
      // await loadProdutosFromServer(); // Load produtos from the server
      navigation.navigate("Home");
    } catch (error) {
      // Handle error
      console.error(
        `Error deleting item with ID ${produto.id_produto}:`,
        error
      );
    }
  };

  return (
    <ScrollView>
      <View styles={styles.container}>
        <DarkMode />
        <View style={styles.imgCtn}>
          <Image source={{ uri: produto.imagem }} style={styles.image} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{produto.nome}</Text>
          <Text style={styles.price}>$ {produto.valor_unitario}</Text>
          <Text style={styles.description}>{produto.descricao}</Text>
          <View style={styles.botoes}>
            <Pressable
              style={[styles.botao, { backgroundColor: theme.primaryBlack }]}
              onPress={() =>
                navigation.navigate("EditarProduto", {
                  produto: produto,
                })
              }
            >
              <Text style={{ color: theme.primaryWhite }}>Editar</Text>
            </Pressable>
            <Pressable
              style={[styles.botao, { backgroundColor: globalStyle.colorRed }]}
              onPress={excluirProduto}
            >
              <Text style={{ color: theme.primaryWhite }}>Excluir</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

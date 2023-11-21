import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { api } from "../../services/api.jsx";
import styles from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";

// import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ produto, theme }) {
  // const navigation = useNavigation();

  const deletarProduto = async () => {
    try {
      const response = await api.delete(`/produto/${produto.id_produto}`);

      // Handle success
      console.log(`Item with ID ${produto.id_produto} deleted successfully`);
      console.log("Response:", response.data);
      getProdutos();
    } catch (error) {
      // Handle error
      console.error(
        `Error deleting item with ID ${produto.id_produto}:`,
        error
      );
    }
  };

  // const editarProduto = () => {
  //   navigation.navigate("EditarProduto", { id_produto: produto.id_produto });
  // };

  return (
    <View style={[styles.produtoCard, { backgroundColor: theme.primaryWhite }]}>
      <View style={styles.produtoImagem}>
        <Image
          source={{ uri: produto.imagem }}
          style={styles.imagem}
          resizeMode="cover"
        />
      </View>
      <View style={styles.stars}>
        <Icon name="rocket" size={30} color="#900" />
      </View>

      <View style={styles.produtoPreco}>
        <Text style={[styles.title, { color: theme.primaryBlack }]}>
          {produto.nome}
        </Text>
        <Text style={{ color: theme.primaryBlack }}>
          $ {produto.valor_unitario}
        </Text>

        <View style={styles.botoes}>
          <Pressable style={styles.botao}>
            {/* Add your pencil icon here */}
          </Pressable>
          <Pressable
            style={[styles.botao, styles.red]}
            onPress={deletarProduto}
          >
            {/* Add your trash icon here */}
          </Pressable>
        </View>
      </View>
    </View>
  );
}

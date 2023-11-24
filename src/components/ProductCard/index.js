import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { api } from "../../services/api.jsx";
import styles from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

// import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ produto, theme, avaliacao }) {
  const navigation = useNavigation();

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

  const renderStars = () => {
    // Create an array of length numberOfStars and fill it with placeholders
    const starsArray = Array.from({ length: avaliacao }, (_, index) => index);

    return starsArray.map((starIndex) => (
      <Icon key={starIndex} name="star" size={10} color={theme.neutral4} />
    ));
  };

  const openProduct = (produto) => {
    navigation.navigate("Produto", {
      produto: produto,
    });
  };

  return (
    <View style={[styles.produtoCard, { backgroundColor: theme.primaryWhite }]}>
      <View style={styles.produtoImagem}>
        <Image
          source={{ uri: produto.imagem }}
          style={styles.imagem}
          resizeMode="cover"
        />
      </View>
      <View style={styles.stars}>{renderStars()}</View>

      <View style={styles.produtoPreco}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.title, { color: theme.primaryBlack }]}
        >
          {produto.nome}
        </Text>
        <Text style={[styles.text, { color: theme.primaryBlack }]}>
          $ {produto.valor_unitario}
        </Text>

        <View style={styles.botoes}>
          <Pressable
            style={[styles.botao, { backgroundColor: theme.primaryBlack }]}
            onPress={() => openProduct(produto)}
          >
            <Text style={{ color: theme.primaryWhite }}>Ver mais</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

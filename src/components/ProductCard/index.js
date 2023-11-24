import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { api } from "../../services/api.jsx";
import styles from "./style.js";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext.js";
import { useContext } from "react";

// import { useNavigation } from "@react-navigation/native";

export default function ProductCard({ produto, avaliacao }) {
  const { theme } = useContext(AuthContext);
  const navigation = useNavigation();

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

import React, { useContext, useEffect, useRef } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import topoImg from "../../../assets/topo-home.jpeg";
import ProductList from "../../components/ProductList";
import { globalStyle } from "../../styles/global";
import { styles } from "./style";
import { useFonts } from "expo-font";
import { AuthContext } from "../../context/AuthContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Footer from "../../components/Footer";
import DarkMode from "../../components/DarkMode";

export default function Home() {
  const scrollViewRef = useRef();
  const {
    theme,
    cliente,
    loadClienteFromStorage,
    loadProdutosFromServer,
    deslogar,
  } = useContext(AuthContext);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      loadProdutosFromServer();
      loadClienteFromStorage();
      if (!cliente) {
        navigation.navigate("LoginCadastro", { screen: "Login" });
      }
    })
  );

  const scrollToPosition = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 850, animated: true });
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <DarkMode />

      <View style={styles.topo}>
        <View style={styles.imgContainer}>
          <Image source={topoImg} style={styles.image} />
        </View>
        <View style={styles.overlay}>
          <Pressable onPress={deslogar}>
            <Text>Sair</Text>
          </Pressable>
          <Text style={styles.overlayText}>
            Escute o{" "}
            <Text
              style={[styles.overlayText, { color: globalStyle.colorBlue }]}
            >
              melhor
            </Text>{" "}
            da música
          </Text>
          <Text
            style={
              (styles.overlayText,
              {
                fontSize: 16,
                fontWeight: "400",
                fontFamily: "Poppins-Regular",
              })
            }
          >
            Ouça a música como nunca antes.
          </Text>
          <Pressable
            style={[
              styles.overlayPressable,
              { backgroundColor: theme.primaryBlack },
            ]}
            onPress={scrollToPosition}
          >
            <Text style={[styles.pressableText, { color: theme.primaryWhite }]}>
              Começar
            </Text>
          </Pressable>
        </View>
      </View>
      <ProductList theme={theme} />
      <Footer />
    </ScrollView>
  );
}

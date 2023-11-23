import React, { useContext, useEffect, useRef } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import topoImg from "../../../assets/topo-home.jpeg";
import ProductList from "../../components/ProductList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme, globalStyle, lightTheme } from "../../styles/globa";
import { styles } from "./style";
import { useFonts } from "expo-font";
import { AuthContext } from "../../context/AuthContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default function Home() {
  const scrollViewRef = useRef();
  const navigation = useNavigation();
  const { theme, toggleTheme, cliente } = useContext(AuthContext);

  useFocusEffect(
    React.useCallback(() => {
      if (!cliente) {
        navigation.navigate("Login");
      }
    }),
    []
  );

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  const scrollToPosition = () => {
    if (scrollViewRef.current) {
      console.log("po");
      scrollViewRef.current.scrollTo({ y: 730, animated: true });
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.topo}>
        <Image source={topoImg} style={styles.image} resizeMode="cover" />
        <View style={styles.overlay}>
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
                fontSize: "16px",
                fontWeight: 400,
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

      <Pressable style={styles.toggleThemeButton} onPress={toggleTheme}>
        <Text style={[styles.toggleThemeButton, { color: theme.primaryBlack }]}>
          Dark Mode
        </Text>
      </Pressable>
      <ProductList theme={theme} />
    </ScrollView>
  );
}

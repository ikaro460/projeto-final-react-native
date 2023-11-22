import React, { useEffect, useRef, useState } from "react";
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

export default function Home() {
  const [theme, setTheme] = useState({});
  const scrollViewRef = useRef();

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    loadThemeChoice().then((savedTheme) => {
      setTheme(savedTheme || lightTheme);
    });
  }, []);

  useEffect(() => {
    if (theme) {
      saveThemeChoice(theme);
    }
  }, [theme]);

  const saveThemeChoice = async (theme) => {
    try {
      await AsyncStorage.setItem("theme", JSON.stringify(theme));
    } catch (error) {
      console.error("Error saving theme choice:", error);
    }
  };

  const loadThemeChoice = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem("theme");
      return savedTheme ? JSON.parse(savedTheme) : null;
    } catch (error) {
      console.error("Error loading theme choice:", error);
      return null;
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

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

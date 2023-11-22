import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import ProductList from "../../components/ProductList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyle } from "../../styles/globa";

export default function Home() {
  const [theme, setTheme] = useState(darkTheme);

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

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Pressable style={styles.toggleThemeButton} onPress={toggleTheme}>
        <Text style={[styles.toggleThemeButton, { color: theme.primaryBlack }]}>
          Dark Mode
        </Text>
      </Pressable>
      <ProductList theme={theme} />
    </SafeAreaView>
  );
}

// Define your theme colors
const lightTheme = {
  primaryWhite: "#fdfdfd",
  primaryBlack: "#0f0f0f",
  brancoFundo: "#f3f5f7",
  neutral1: "#6c7275",
  neutral2: "#343839",
  neutral3: "#232627",
  neutral4: "#141718",
  shadowColor: "0px 0px 25px 0px rgba(0, 0, 0, 0.3)",
  backgroundColor: "#fdfdfd",
  errorMessageColor: "#ff5630",
};

const darkTheme = {
  primaryWhite: "#0f0f0f",
  primaryBlack: "#fefefe",
  brancoFundo: "#101010",
  neutral4: "#6c7275",
  neutral3: "#343839",
  neutral2: "#232627",
  neutral1: "#141718",
  shadowColor: "0px 0px 15px 0px rgba(208, 208, 208, 0.2)",
  backgroundColor: "#0f0f0f",
  errorMessageColor: "#ff5630",
};

// Export the styles
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1, // Assuming you want the background to cover the entire screen
  },
  toggleThemeButton: {
    width: 50,
    backgroundColor: globalStyle.colorOrange,
  },
  toggleThemeText: {
    fontSize: 12,
  },
});

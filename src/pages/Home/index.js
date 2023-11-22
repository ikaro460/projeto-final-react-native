import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import ProductList from "../../components/ProductList";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme, globalStyle, lightTheme } from "../../styles/globa";

export default function Home() {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    loadThemeChoice().then((savedTheme) => {
      setTheme(savedTheme || lightTheme); // Assuming you have a default theme (lightTheme)
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

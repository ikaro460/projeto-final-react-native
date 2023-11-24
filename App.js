import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductList from "./src/components/ProductList";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppRouter from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import { useFonts, Poppins_Regular, Inter_Regular } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  // if (!fontsLoaded) {
  //   // Fonts are still loading, return null or a loading indicator
  //   return null;
  // }
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </NavigationContainer>
  );
}

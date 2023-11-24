import React, { useContext, useState } from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../context/AuthContext";
import styles from "./style";

const DarkMode = () => {
  const { theme, toggleTheme } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  return (
    <Pressable style={styles.toggleThemeButton} onPress={handleToggleTheme}>
      <Ionicons
        name={isDarkMode ? "sunny-outline" : "moon-outline"}
        size={28}
        color={theme.primaryBlack}
        style={{ marginRight: 4 }}
      />
      <Text
        style={[styles.toggleThemeButtonText, { color: theme.primaryBlack }]}
      >
        {isDarkMode ? "" : ""}
      </Text>
    </Pressable>
  );
};

export default DarkMode;

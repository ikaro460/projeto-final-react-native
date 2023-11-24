import React, { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "../../context/AuthContext";
import AppRouter from "../../routes";
import { styles } from "./style";

export const InternetConnectionMonitor = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const isConnected = state.isConnected;
      setIsConnected(isConnected);

      if (!isConnected) {
        // Display an alert or perform other actions when there is no internet connection
        Alert.alert(
          "No Internet Connection",
          "Please check your internet connection and try again."
        );
      }
    });

    // Cleanup subscription when the component is unmounted
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer containerStyle={styles.container}>
      {!isConnected ? (
        <View style={styles.textCtn}>
          <Text style={styles.netInfoText}>No internet connection</Text>
        </View>
      ) : (
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      )}
    </NavigationContainer>
  );
};

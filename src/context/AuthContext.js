import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage for React Native
import axios from "axios"; // Import axios for HTTP requests
import { lightTheme, darkTheme } from "../styles/globa";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cliente, setCliente] = useState(null);
  const [produtos, setProdutos] = useState(null);
  const [theme, setTheme] = useState(lightTheme);

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

  useEffect(() => {
    // On component mount, load client info from AsyncStorage
    const loadClienteFromStorage = async () => {
      try {
        const clienteInfo = await AsyncStorage.getItem("info");
        if (clienteInfo) {
          setCliente(JSON.parse(clienteInfo));
        }
      } catch (error) {
        console.error("Error loading cliente info:", error);
      }
    };

    // On component mount, load produtos from the server
    const loadProdutosFromServer = async () => {
      try {
        const response = await axios.get("https://your-api-url/produto");
        setProdutos(response.data);

        // Save produtos to AsyncStorage
        await AsyncStorage.setItem("produtos", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error loading produtos:", error);
      }
    };

    loadClienteFromStorage();
    loadProdutosFromServer();
  }, []); // Empty dependency array ensures the effect runs only on mount

  const logar = (loginData) => {
    setCliente(loginData);

    // Save cliente info to AsyncStorage
    AsyncStorage.setItem("info", JSON.stringify(loginData));
  };

  const deslogar = () => {
    setCliente(null);

    // Remove cliente info from AsyncStorage
    AsyncStorage.removeItem("info");
  };

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

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

  return (
    <AuthContext.Provider
      value={{
        cliente: cliente,
        estaLogado: !!cliente,
        logar,
        deslogar,
        theme,
        setTheme,
        toggleTheme,
        saveThemeChoice,
        loadThemeChoice,
        produtos: produtos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

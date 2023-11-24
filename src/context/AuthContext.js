import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage for React Native
import axios from "axios"; // Import axios for HTTP requests
import { lightTheme, darkTheme } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [cliente, setCliente] = useState(null);
  const [produtos, setProdutos] = useState(null);
  const [theme, setTheme] = useState(lightTheme);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadProdutosFromServer(); // Load produtos from the server
    getUsers(); // Load users from the server
    // Load theme from AsyncStorage
    loadThemeChoice().then((savedTheme) => {
      setTheme(savedTheme || lightTheme);
    });
  }, []); // Empty dependency array ensures the effect runs only on mount

  useEffect(() => {
    if (theme) {
      saveThemeChoice(theme);
    }
  }, [theme]);

  const getUsers = async () => {
    try {
      const { data } = await api.get("cliente");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadClienteFromStorage = async (page) => {
    if (cliente === null) {
      try {
        const clienteInfo = await AsyncStorage.getItem("info");
        if (clienteInfo) {
          setCliente(JSON.parse(clienteInfo));
        }
      } catch (error) {
        console.error("Error loading cliente info:", error);
      }
    }
  };

  const loadProdutosFromServer = async () => {
    try {
      const response = await api.get("produto");
      setProdutos(response.data);

      // Save produtos to AsyncStorage
      await AsyncStorage.setItem("produtos", JSON.stringify(response.data));
    } catch (error) {
      console.error("Error loading produtos:", error);
    }
  };

  const logar = (loginData) => {
    setCliente(loginData);

    // Save cliente info to AsyncStorage
    AsyncStorage.setItem("info", JSON.stringify(loginData));

    navigation.navigate("Home", { cliente: cliente });
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
        loadClienteFromStorage,
        loadProdutosFromServer,
        users,
        getUsers,
        produtos: produtos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

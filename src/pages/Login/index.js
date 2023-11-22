import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import saxofone from "../../../assets/perfil.png";
import styles from "./style.js"; // You need to create a style file for your components
import { api } from "../../services/api.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme, globalStyle, lightTheme } from "../../styles/globa.js";

export default function Login() {
  const [theme, setTheme] = useState(lightTheme);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [users, setUsers] = useState([]);
  const [cliente, setCliente] = useState();
  const [mensagemErro, setMensagemErro] = useState("");
  const navigation = useNavigation();

  useFocusEffect(() => {
    getUsuarios();
    loadThemeChoice();
    loadUser();
  });

  const loadUser = async () => {
    try {
      const user = await AsyncStorage.getItem("info");
      console.log(JSON.parse(user));
      return user ? navigation.navigate("Home") : null;
    } catch (error) {
      console.error("User not logged yet:", error);
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

  async function getUsuarios() {
    try {
      const { data } = await api.get("cliente");
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  }

  const entrar = () => {
    getUsuarios();
    const matchingClientes = users.filter((cliente) => {
      if (login === cliente.email && senha === cliente.senha) {
        const info = {
          login: login,
          nome: cliente.nome,
          senha: senha,
        };

        logar(info);
        setLogin("");
        setSenha("");
        navigation.navigate("Home", { nome: cliente.nome });
        return true; // Cliente válido
      } else {
        return false; // Cliente inválido
      }
    });

    if (login.length === 0 || senha.length === 0) {
      setMensagemErro("Preencha os campos de login e senha");
    } else if (matchingClientes.length === 0) {
      setMensagemErro("Login ou senha inválidos!");
    }
  };

  const logar = async (loginData) => {
    await AsyncStorage.setItem("info", JSON.stringify(loginData));
    setCliente(loginData);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Pressable style={styles.toggleThemeButton} onPress={toggleTheme}>
        <Text style={[styles.toggleThemeButton, { color: theme.primaryBlack }]}>
          Dark Mode
        </Text>
      </Pressable>
      <Image source={saxofone} style={styles.image} />
      <View style={styles.form}>
        <Text
          style={[
            styles.errorMessage,
            styles.text,
            { color: globalStyle.colorRed },
          ]}
        >
          {mensagemErro}
        </Text>
        <Text
          style={[styles.title, styles.text, { color: theme.primaryBlack }]}
        >
          Login
        </Text>
        <Text style={[styles.text, styles.greyText, { color: theme.neutral1 }]}>
          Não tem conta ainda?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text
              style={[
                styles.link,
                styles.text,
                { color: globalStyle.colorGreen },
              ]}
            >
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </Text>
        <View style={styles.inputs}>
          <TextInput
            style={[styles.input, styles.text]}
            placeholder="Seu email de acesso"
            placeholderTextColor={theme.neutral1}
            value={login}
            onChangeText={(text) => setLogin(text)}
          />
          <TextInput
            style={[styles.input, styles.text]}
            placeholder="Senha"
            placeholderTextColor={theme.neutral1}
            secureTextEntry
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
        </View>
        <Pressable
          style={[styles.botao, { backgroundColor: theme.primaryBlack }]}
          onPress={entrar}
        >
          <Text style={[{ color: theme.primaryWhite }, styles.text]}>
            Entrar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import fone from "../../../assets/fone-1.png";
import styles from "./style.js"; // You need to create a style file for your components
import { api } from "../../services/api.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme, globalStyle, lightTheme } from "../../styles/globa.js";
import { AuthContext } from "../../context/AuthContext.js";

export default function Login() {
  const { theme, toggleTheme } = useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [users, setUsers] = useState([]);
  const [cliente, setCliente] = useState();
  const [mensagemErro, setMensagemErro] = useState("");
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      getUsuarios();
      loadUser();
    }, [])
  );

  const loadUser = async () => {
    try {
      const user = await AsyncStorage.getItem("info");
      console.log(JSON.parse(user));
      return user ? navigation.navigate("Home") : null;
    } catch (error) {
      console.error("User not logged yet:", error);
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

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Pressable style={styles.toggleThemeButton} onPress={toggleTheme}>
        <Text style={[styles.toggleThemeButton, { color: theme.primaryBlack }]}>
          Dark Mode
        </Text>
      </Pressable>
      <View>
        <Image source={fone} style={styles.image} resizeMode="contain" />
      </View>
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
    </SafeAreaView>
  );
}

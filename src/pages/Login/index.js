import React, { useContext, useEffect } from "react";
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
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import fone from "../../../assets/fone-1.png";
import styles from "./style.js"; // You need to create a style file for your components
import { api } from "../../services/api.jsx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { darkTheme, globalStyle, lightTheme } from "../../styles/global.js";
import { AuthContext } from "../../context/AuthContext.js";
import { Ionicons } from "@expo/vector-icons";
import DarkMode from "../../components/DarkMode";

export default function Login() {
  const { theme, toggleTheme, logar, loadClienteFromStorage, users, cliente } =
    useContext(AuthContext);
  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [mensagemErro, setMensagemErro] = React.useState("");
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      loadClienteFromStorage();
      if (!!cliente) {
        navigation.navigate("Main", { screen: "Home" });
      }
    })
  );

  const entrar = () => {
    const matchingClientes = users.filter((cliente) => {
      if (login === cliente.email && senha === cliente.senha) {
        const info = {
          email: login,
          nome: cliente.nome,
          senha: senha,
        };

        setLogin("");
        setSenha("");
        logar(info);
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

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <DarkMode />
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
          <Pressable onPress={() => navigation.navigate("Cadastro")}>
            <Text
              style={[
                styles.link,
                styles.text,
                { color: globalStyle.colorGreen },
              ]}
            >
              Cadastre-se
            </Text>
          </Pressable>
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

import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/core";
import fone from "../../../assets/fone-1.png";
import { darkTheme, globalStyle, lightTheme } from "../../styles/global.js";
import { AuthContext } from "../../context/AuthContext.js";
import { styles } from "./style.js";

export default function Login() {
  const { theme, toggleTheme, logar, loadClienteFromStorage, users, cliente } =
    useContext(AuthContext);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
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
    <ScrollView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Pressable style={styles.toggleThemeButton} onPress={toggleTheme}>
        <Text style={{ color: theme.primaryBlack }}>Dark Mode</Text>
      </Pressable>

      <View style={styles.imgContainer}>
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

        <View style={styles.greyTxtCtn}>
          <Text style={[styles.greyText, { color: theme.neutral1 }]}>
            Não tem conta ainda?
          </Text>
          <Pressable onPress={() => navigation.navigate("Cadastro")}>
            <Text style={[styles.link, { color: globalStyle.colorGreen }]}>
              Cadastre-se
            </Text>
          </Pressable>
        </View>
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
    </ScrollView>
  );
}

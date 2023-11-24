import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import logo from "../../../assets/logo.png";
import { api } from "../../services/api";
import { styles } from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { darkTheme, globalStyle, lightTheme } from "../../styles/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";
import DarkMode from "../../components/DarkMode";
import Footer from "../../components/Footer";

export default function Cadastro() {
  const { theme, toggleTheme, logar } = useContext(AuthContext);
  const navigation = useNavigation();
  const [mensagemErro, setMensagemErro] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    pedidos: [],
  });

  const cadastrar = async () => {
    if (formData.nome == "" || formData.email == "" || formData.senha == "") {
      setMensagemErro("Preencha todos os campos");
    } else if (formData.senha == "") {
      setMensagemErro("A senha deve ser preenchida");
    } else {
      try {
        const existingUser = await api.get(`cliente?email=${formData.email}`);

        if (existingUser.data.length > 0) {
          setMensagemErro("Email já cadastrado");
        } else {
          const data = await api.post("cliente", formData);
          console.log("Cadastro efetuado com sucesso!");
          logar({
            email: formData.email,
            senha: formData.senha,
          });
          navigation.navigate("Home");
          setFormData({
            nome: "",
            email: "",
            senha: "",
            pedidos: [],
          });
        }
      } catch (err) {
        console.log(err);
        setMensagemErro(
          "Ocorreu um erro ao cadastrar. Tente novamente mais tarde."
        );
      }
    }
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <DarkMode />

      <View style={styles.imgContainer}>
        <Image source={logo} style={styles.image} />
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
          Cadastro
        </Text>

        <View style={styles.greyTxtCtn}>
          <Text
            style={[styles.text, styles.greyText, { color: theme.neutral1 }]}
          >
            Já possui uma conta?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={[styles.link, { color: globalStyle.colorGreen }]}>
              Entre agora!
            </Text>
          </Pressable>
        </View>
        <TextInput
          style={[styles.input, { color: theme.primaryBlack }]}
          placeholder="Seu nome completo"
          placeholderTextColor={theme.neutral1}
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
        <TextInput
          style={[styles.input, { color: theme.primaryBlack }]}
          placeholder="Seu email de acesso"
          placeholderTextColor={theme.neutral1}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextInput
          style={[styles.input, { color: theme.primaryBlack }]}
          placeholder="Senha"
          placeholderTextColor={theme.neutral1}
          value={formData.senha}
          onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
          secureTextEntry
          maxLength={64}
        />

        <Pressable
          style={[styles.botao, { backgroundColor: theme.primaryBlack }]}
          onPress={cadastrar}
        >
          <Text style={[{ color: theme.primaryWhite }, styles.text]}>
            Cadastrar
          </Text>
        </Pressable>
      </View>
      <Footer />
    </ScrollView>
  );
}

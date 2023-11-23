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
import perfil from "../../../assets/perfil.png";
import { api } from "../../services/api";
import { styles } from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { darkTheme, globalStyle, lightTheme } from "../../styles/globa";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../context/AuthContext";

export default function Cadastro() {
  const { theme, toggleTheme } = useContext(AuthContext);
  const navigation = useNavigation();
  const [mensagemErro, setMensagemErro] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    pedidos: [],
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
    }
  }, []);

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
      <Pressable style={styles.toggleThemeButton} onPress={toggleTheme}>
        <Text style={[styles.toggleThemeButton, { color: theme.primaryBlack }]}>
          Dark Mode
        </Text>
      </Pressable>

      <View>
        <Image source={perfil} style={styles.image} />
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
        <Text style={[styles.text, styles.greyText, { color: theme.neutral1 }]}>
          Já possui uma conta?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text
              style={[
                styles.link,
                styles.text,
                { color: globalStyle.colorGreen },
              ]}
            >
              Entre agora!
            </Text>
          </TouchableOpacity>
        </Text>

        <TextInput
          style={[styles.input, styles.text]}
          placeholder="Seu nome completo"
          placeholderTextColor={theme.neutral1}
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
        <TextInput
          style={[styles.input, styles.text]}
          placeholder="Seu email de acesso"
          placeholderTextColor={theme.neutral1}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextInput
          style={[styles.input, styles.text]}
          placeholder="Senha"
          placeholderTextColor={theme.neutral1}
          value={formData.senha}
          onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
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
    </ScrollView>
  );
}

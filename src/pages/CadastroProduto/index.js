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
import * as ImagePicker from "expo-image-picker";
import Footer from "../../components/Footer";
import DarkMode from "../../components/DarkMode";

export default function CadastroProduto() {
  const { theme, toggleTheme, logar } = useContext(AuthContext);
  const navigation = useNavigation();
  const [mensagemErro, setMensagemErro] = useState("");
  const [selectedImage, setSelectedImage] = useState(logo);
  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    valor_unitario: "",
    imagem: null,
  });

  const handleImageUpload = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted) {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setFormData({ ...formData, imagem: result.uri });
        setSelectedImage(result.uri);
      }
    }
  };

  const cadastrar = async () => {
    if (
      formData.nome === "" ||
      formData.descricao === "" ||
      formData.valor_unitario === ""
    ) {
      setMensagemErro("Preencha todos os campos");
    } else {
      try {
        const existingproduct = await api.get(`produto?nome=${formData.nome}`);
        console.log(formData);

        if (existingproduct.data.length > 0) {
          setMensagemErro("Produto já cadastrado");
        } else {
          const data = await api.post("produto", formData);
          console.log("Cadastro efetuado com sucesso!", data);
          setFormData({
            nome: "",
            email: "",
            senha: "",
            pedidos: [],
          });
          navigation.navigate("Home");
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
        <Image source={selectedImage} style={styles.image} />
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
          Cadastro de Produtos
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
          style={[styles.input, styles.text, { color: theme.primaryBlack }]}
          placeholder="Nome do produto"
          placeholderTextColor={theme.neutral1}
          value={formData.nome}
          onChangeText={(text) => setFormData({ ...formData, nome: text })}
        />
        <TextInput
          style={[styles.input, styles.text, { color: theme.primaryBlack }]}
          placeholder="Descrição do produto"
          placeholderTextColor={theme.neutral1}
          value={formData.descricao}
          onChangeText={(text) => setFormData({ ...formData, descricao: text })}
        />
        <TextInput
          style={[styles.input, styles.text, { color: theme.primaryBlack }]}
          placeholder="Preço (R$)"
          placeholderTextColor={theme.neutral1}
          value={formData.valor_unitario}
          onChangeText={(text) =>
            setFormData({ ...formData, valor_unitario: text })
          }
          maxLength={64}
        />

        <Pressable style={styles.inputContainer} onPress={handleImageUpload}>
          <Text style={[styles.input, { color: theme.primaryBlack }]}>
            Selecionar Imagem
          </Text>
        </Pressable>

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

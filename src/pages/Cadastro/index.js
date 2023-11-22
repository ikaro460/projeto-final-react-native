import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button, Pressable } from "react-native";
import { api } from "../../services/api";
import { style } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    pedidos: [],
  });

  const navigation = useNavigation();

  const [mensagemErro, setMensagemErro] = useState("");

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
    <View style={style.container}>
      <Text style={style.title}>Cadastro</Text>
      <Text style={style.mensagemErro}>
        {mensagemErro && <Text>{mensagemErro}</Text>}
      </Text>

      <TextInput
        style={style.input}
        placeholder="Seu nome completo"
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      <TextInput
        style={style.input}
        placeholder="Seu email de acesso"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <TextInput
        style={style.input}
        placeholder="Senha"
        value={formData.senha}
        onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
        maxLength={64}
      />

      <Pressable style={style.button} onPress={cadastrar}>
        <Text style={style.buttonText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

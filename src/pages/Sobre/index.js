import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import { styles } from "./style";
import Footer from "../../components/Footer";
import DarkMode from "../../components/DarkMode";

function Sobre() {
  const [logins, setLogins] = useState([]);

  const users = [
    { login: "ikaro460" },
    { login: "LexSeiffert" },
    { login: "bordeguilherme" },
    { login: "beabarcel" },
    { login: "brunolimaptr" },
    { login: "sh9bba" },
  ];

  const urls = users.map(
    (user) => `https://api.github.com/users/${user.login}`
  );

  const getLogins = async () => {
    try {
      const promises = urls.map((url) => axios.get(url));
      const responses = await Promise.all(promises);
      const data = responses.map((response) => response.data);
      setLogins(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLogins();
  }, []);

  return (
    <View style={styles.container}>
      <DarkMode />
      <View style={styles.section}>
        <Text style={styles.heading}>Sobre Nós</Text>
        <Text style={styles.text}>
          Este projeto é referente ao trabalho final do Grupo 2 da Disciplina
          "Desenvolvimento de Aplicativo Mobile" da Turma 12 da Residência em
          TIC/Software 2023.2 do Serratec. Este projeto visa oferecer uma
          experiência eficiente e agradável para o gerenciamento de um
          E-Commerce. O desenvolvimento segue premissas, garantindo
          versionamento, organização do código e um layout atraente para os
          usuários.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Nossos Fundadores</Text>
        <View style={styles.containerPessoas}>
          {logins.map((item) => (
            <View key={item.id}>
              <Image
                source={{ uri: item.avatar_url }}
                style={styles.founderImage}
              />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
      <Footer />
    </View>
  );
}
export default Sobre;

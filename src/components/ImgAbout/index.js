import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ImgAbout({ item }) {
  const linkGithub = `https://github.com/${item.login}`;
  const navigation = useNavigation();

  const openGithubProfile = () => {
    Linking.openURL(linkGithub);
  };

  return (
    <TouchableOpacity
      onPress={openGithubProfile}
      style={styles.imgAboutContainer}
    >
      <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  imgAboutContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 5,
    fontSize: 16,
  },
};

export default ImgAbout;

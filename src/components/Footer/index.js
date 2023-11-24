import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Make sure you have a React Native alternative for these icons
import styles from "./style"; // Make sure to create a stylesheet for your styles

const Footer = () => {
  const redirectToGithub = () => {
    Linking.openURL(
      "https://github.com/ikaro460/projeto-final-react-native.git"
    );
  };

  return (
    <View style={styles.footer}>
      <View style={styles.socialList}>
        <TouchableOpacity
          style={styles.socialListItem}
          onPress={redirectToGithub}
        >
          {/* Use React Native alternative for the GitHub icon */}
          <FaGithub />
        </TouchableOpacity>
        {/* You may need to find React Native alternatives for the other icons */}
        <View style={styles.socialListItem}>
          <FaFacebook />
        </View>
        <View style={styles.socialListItem}>
          <FaInstagram />
        </View>
        <View style={styles.socialListItem}>
          <FaLinkedin />
        </View>
      </View>
      <Text style={styles.copyRight}>Serratec &copy; 2023</Text>
    </View>
  );
};

export default Footer;

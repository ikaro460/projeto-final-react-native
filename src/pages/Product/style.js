import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgCtn: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    fontFamily: "Inter",
  },

  info: {
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    margin: 5,
    color: "#141718",
    fontSize: 32,
    fontFamily: "Inter",
    fontWeight: "600",
    lineHeight: 26,
    wordWrap: "break-word",
  },
  price: {
    margin: 5,
    color: "#121212",
    fontSize: 22,
    fontFamily: "Inter",
    fontWeight: "600",
    lineHeight: 22,
    wordWrap: "break-word",
  },

  title: {
    margin: 5,
    color: "#6C7275",
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 20,
    wordWrap: "break-word",
  },
  // BUTTON

  botoes: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  botao: {
    height: 48,
    width: 100,
    padding: 10,
    margin: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    transition: 0.2,
    fontWeight: "500",
    letterSpacing: 1,
    gap: 8,
    backgroundColor: "#989898",
  },
});

export default styles;

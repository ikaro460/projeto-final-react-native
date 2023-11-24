import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles/global";

const styles = StyleSheet.create({
  container: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    display: "inline-flex",
    width: 312,
    height: 416,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Inter",
  },

  name: {
    color: "#141718",
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "600",
    lineHeight: 26,
    wordWrap: "break-word",
  },
  price: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "600",
    lineHeight: 22,
    wordWrap: "break-word",
  },

  title: {
    color: "#6C7275",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 20,
    wordWrap: "break-word",
  },
});

export default styles;

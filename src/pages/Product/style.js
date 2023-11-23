import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles/globa";

const styles = StyleSheet.create({
  container: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    display: "flex",
    width: 311,
    height: 414,
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
  },
  text: {
    fontFamily: "Inter, sans-serif",
  },

  name: {
    fontFamily: "Poppins",
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: 44,
    letterSpacing: -0.4,
  },
  price: {
    fontFamily: "Poppins",
    fontSize: 28,
    fontStyle: "normal",
    fontWeight: 500,
    color: "#333333",
  },

  title: {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: 500,
    lineHeight: "44px",
    letterSpacing: -0.4,
    marginBottom: "24px",
  },
});

export default styles;

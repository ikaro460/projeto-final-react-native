import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    height: 200,
  },

  form: {
    margin: 32,
  },
  text: {
    fontFamily: "Inter, sans-serif",
  },
  title: {
    fontFamily: "Poppins",
    fontSize: "40px",
    fontWeight: 500,
    lineHeight: "44px",
    letterSpacing: -0.4,
    marginBottom: "24px",
  },
  greyText: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "26px",
    letterSpacing: -0.4,
    marginBottom: "32px",
  },
  link: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "26px",
    letterSpacing: -0.4,
  },
  input: {
    height: "40px",
    marginBottom: "32px",
    transition: "0.2s",
    padding: 5,
    height: 40,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderColor: "#e8ecef",
  },
  // BUTTON
  botao: {
    height: 48,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    transition: "0.2s",
    fontWeight: "500",
    letterSpacing: 1,
    gap: 8,
    backgroundColor: "#989898",
  },
});

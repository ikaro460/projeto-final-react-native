import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  produtoCard: {
    width: "45%",
    borderRadius: 7,
    margin: 10,
    padding: 15,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    elevation: 3,
  },
  produtoImagem: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 150,
    overflow: "hidden",
  },
  imagem: {
    width: "100%",
    aspectRatio: 1, // Manter a proporção da imagem
  },
  produtoPreco: {
    color: "#000000", // Substitua pela cor desejada
    transition: 0.2,
  },
  stars: {
    display: "flex",
    letterSpacing: 2,
    fontSize: 12,
    color: "#000000", // Substitua pela cor desejada
  },
  title: {
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
  },
  text: {
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 22,
  },
  botoes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    color: "#ffffff", // Substitua pela cor desejada
    transition: 0.2,
    fontWeight: "500",
    letterSpacing: 1,
    display: "flex",
    width: "30%",
    height: 48,
    padding: 10,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "#neutral-4", // Substitua pela cor desejada
  },
  botaoHover: {
    borderColor: "#color-red", // Substitua pela cor desejada
  },
  red: {
    backgroundColor: "#color-red", // Substitua pela cor desejada
  },
  mediaQuery: {
    produtoImagem: {
      width: 230,
      height: 230,
    },
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  produtoCard: {
    margin: 12,
    borderRadius: 7,
    backgroundColor: "#ffffff", // Substitua pela cor desejada
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: 12,
  },
  produtoImagem: {
    display: "flex",
    alignItems: "center",
    width: 262,
    height: 315,
    overflow: "hidden",
  },
  imagem: {
    width: "100%",
    aspectRatio: 1, // Manter a proporção da imagem
    resizeMode: "contain",
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
  h3: {
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 26,
  },
  p: {
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

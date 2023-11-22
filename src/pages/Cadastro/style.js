import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  mensagemErro: {
    color: "red",
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#141718",
    color: "#fff",
    height: 40,
    width: "100%",
    borderRadius: 5,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },
  buttonText: {
    color: "white",
  },
});

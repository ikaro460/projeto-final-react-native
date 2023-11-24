import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#ffff",
  },
  section: {
    alignItems: "center",
    margin: 15,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },

  containerPessoas: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 20,
    margin: 10,
  },

  founderImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#2d2d2d", // Replace with your color variable or hex code
    color: "#fff",
    padding: 3 * 16, // Assuming 1em is equivalent to 16 pixels
    textAlign: "center",
  },
  socialList: {
    margin: 0,
    padding: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialListItem: {
    marginHorizontal: 16, // Adjust the spacing as needed
  },
  copyRight: {
    textAlign: "center",
    left: -5,
    marginTop: 2 * 16, // Adjust the spacing as needed
  },
  copyRightText: {
    fontWeight: "bold",
    color: "#ffbb33",
  },
});

export default styles;

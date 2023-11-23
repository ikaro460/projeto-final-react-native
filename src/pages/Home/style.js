import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles/globa";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1, // Assuming you want the background to cover the entire screen
  },
  toggleThemeButton: {
    width: 50,
    backgroundColor: globalStyle.colorOrange,
  },
  toggleThemeText: {
    fontSize: 12,
  },
  topo: {
    height: "110vh",
  },
  image: {
    flex: 1,
    aspectRatio: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // This makes the overlay take the whole parent space
    marginTop: 35,
    justifyContent: "start",
    alignItems: "center",
  },
  overlayText: {
    width: "80%",
    color: "#121212",
    fontFamily: "Poppins-Regular",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "44px",
    letterSpacing: "-0.4px",
    textAlign: "center",
  },
  overlayPressable: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 8,
    width: "250px",
    justifyContent: "center",
    alignItems: "center",
  },
  pressableText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
});

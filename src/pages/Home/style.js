import { StyleSheet } from "react-native";
import { globalStyle } from "../../styles/global";

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
  imgContainer: {
    height: 800,
    backgroundColor: "pink",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
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
    fontSize: 40,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 44,
    letterSpacing: -0.4,
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

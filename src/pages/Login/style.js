import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imgContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  form: {
    margin: 32,
  },
  text: {
    fontFamily: "Inter-Regular",
  },
  title: {
    fontSize: 50,
    fontFamily: "Poppins-Medium",
    letterSpacing: -0.4,
    marginBottom: "24px",
  },
  greyTxtCtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 50,
  },
  greyText: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    marginBottom: 10,
  },
  link: {
    marginLeft: 4,
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },

  input: {
    fontSize: 16,
    marginBottom: "32px",
    padding: 5,
    height: 50,
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
    transition: 0.2,
    fontWeight: "500",
    letterSpacing: 1,
    gap: 8,
    backgroundColor: "#989898",
  },
});

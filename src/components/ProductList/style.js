import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 10,
  },
  prodList: {
    justifyContent: "space-between", // Space items evenly horizontally
    alignItems: "flex-start", // Align items to the start of the container
    padding: 5,
    width: "100%",
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
  },
});

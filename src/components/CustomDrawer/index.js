import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          width: "100%",
          height: 85,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 24,
        }}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={{ width: 65, height: 65 }}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

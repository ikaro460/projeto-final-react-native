import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import CustomDrawer from "../components/CustomDrawer";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import { useNavigation } from "@react-navigation/native";
import Product from "../pages/Product";

const Drawer = createDrawerNavigator();
export default function AppRouter() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveBackgroundColor: "#0f0f0f",
        drawerInactiveBackgroundColor: "#f1f1f1",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#000",
      }}
    >
      <Drawer.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ title: "Cadastro" }}
      />
      <Drawer.Screen
        name="Produto"
        component={Product}
        options={{ title: "Produto" }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Início" }}
      />
    </Drawer.Navigator>
  );
}

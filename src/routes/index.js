import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import CustomDrawer from "../components/CustomDrawer";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import { useNavigation } from "@react-navigation/native";
import Product from "../pages/Product";
import { createStackNavigator } from "@react-navigation/stack";
import CadastroProduto from "../pages/CadastroProduto";
import { Pressable, Text } from "react-native";
import Sobre from "../pages/Sobre";
import EditarProduto from "../pages/EditarProduto";

const Stack = createStackNavigator(); // Create a stack navigator
const Drawer = createDrawerNavigator();

function LoginCadastro() {
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
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
    </Drawer.Navigator>
  );
}

function Main() {
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
        name="Home"
        component={Home}
        options={{ title: "Início" }}
      />
      <Drawer.Screen
        name="CadastroProduto"
        component={CadastroProduto}
        options={{ title: "Cadastrar Produto" }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{ title: "Sobre o projeto" }}
      />
    </Drawer.Navigator>
  );
}

export default function AppRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="LoginCadastro"
        component={LoginCadastro}
        options={() => ({
          headerShown: false,
        })}
      />
      <Drawer.Screen name="Produto" component={Product} />
      <Drawer.Screen name="EditarProduto" component={EditarProduto} />
    </Stack.Navigator>
  );
}

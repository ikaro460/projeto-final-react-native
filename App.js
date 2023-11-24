import { useEffect, useState } from "react";
import { Image, Platform, SafeAreaView, Text, View } from "react-native"; // Import Platform from react-native
import AppRouter from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import { useFonts } from "expo-font";
import LottieView from "lottie-react-native";
import { InternetConnectionMonitor } from "./src/components/InternetMonitor";
import logo from "./assets/logo.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),

    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    // Simulate some asynchronous loading process (e.g., loading data, fonts, etc.)
    const loadData = async () => {
      // Your asynchronous loading code goes here

      // Simulate loading time
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setAnimationLoaded(true);
    };

    loadData();
  }, []);

  if (!fontsLoaded || !animationLoaded) {
    if (Platform.OS === "web") {
      // Render a placeholder or alternative content for the web
      return <div>Loading...</div>;
    }
    // Render a splash screen with the Lottie animation
    return (
      <LottieView
        source={require("./assets/animations/splashAnimation.json")}
        autoPlay
        loop={true}
        onAnimationFinish={() => setAnimationLoaded(true)}
      />
    );
  }
  return <InternetConnectionMonitor />;
}

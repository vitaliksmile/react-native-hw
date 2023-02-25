import { useCallback, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

// import * as Font from "expo-font";
// import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

// const loadApplication = async () => {
//   await Font.loadAsync({
//     "Roboto-Bold-700": require("./assets/fonts/Roboto-Bold.ttf"),
//     "Roboto-Medium-500": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Regular-400": require("./assets/fonts/Roboto-Regular.ttf"),
//   });
// };

export default function App() {
  // const [iasReady, setIasReady] = useState(false);
  const routing = useRoute(true);

  const [fontsLoaded] = useFonts({
    "Roboto-Bold-700": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular-400": require("./assets/fonts/Roboto-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}

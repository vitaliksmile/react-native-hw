import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Bold-700": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium-500": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular-400": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default function App() {
  const [iasReady, setIasReady] = useState(false);
  const routing = useRoute(true);
  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }
  return <NavigationContainer>{routing}</NavigationContainer>;
}

import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
// import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  const [activeKayboard, setActiveKayboard] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setActiveKayboard(false);
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/image/Photo-BG.jpg")}
        >
          <RegistrationScreen
            activeKayboard={activeKayboard}
            setActiveKayboard={setActiveKayboard}
          />
          {/* <LoginScreen
            activeKayboard={activeKayboard}
            setActiveKayboard={setActiveKayboard}
          /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});

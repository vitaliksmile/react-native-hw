import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const initialState = {
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Bold-700": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium-500": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular-400": require("../../assets/fonts/Roboto-Regular.ttf"),
  });
};
const LoginScreen = ({ activeKayboard, setActiveKayboard }) => {
  const [state, setState] = useState(initialState);
  const [iasReady, setIasReady] = useState(false);

  const keyboardHide = () => {
    setActiveKayboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  if (!iasReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIasReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View
          style={{ ...styles.form, marginBottom: activeKayboard ? 32 : 144 }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Войти</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                onFocus={() => setActiveKayboard(true)}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setActiveKayboard(true)}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={keyboardHide}
          >
            <Text style={styles.btnTitle}>Войти</Text>
          </TouchableOpacity>
          <Text style={styles.link}>Нет аккаунта? Зарегистрироваться</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
   
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // opacity: 0.8,
  },
  form: {
   
    marginHorizontal: 16,
    justifyContent: "flex-end",
    // marginBottom: 78,
  },
  header: {
    alignItems: "center",
    marginTop: 32,
  },
  headerTitle: {
    fontSize: 33,
    color: "black",
    marginBottom: 32,
    fontFamily: "Roboto-Medium-500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "white",
    fontFamily: "Roboto-Regular-400",
  },
  link: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto-Regular-400",
  },
});
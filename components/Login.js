import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  const [logText, setLogText] = useState("");
  const [passText, setPassText] = useState("");
  const [loginField, setLoginField] = useState({valid: false, value: "", error: ""});
  const [passwordField, setPasswordField] = useState({valid: false, value: "", error: ""});
  
  const submitForm = () => {
    let formValid = true;
    if (loginField.valid == false) {
      formValid = false;
      loginField.error = "Это поле обязательное для заполнения";
    } 
    if (passwordField.valid == false) {
      formValid = false;
      passwordField.error = "Это поле обязательное для заполнения";
    }

    if (formValid) {
      console.log("succ");
      return "form sent";
    }
    else {
      console.log("error");
      return "error";
    }
  }

  const validateRequired = (value) => {
    if (value) {
      return true;
    }
    return false;
  }

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 25 }}>Login screen</Text>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          onChangeText={(newText) => setLoginField({valid: validateRequired(newText), value: newText, error: ""})}
          defaultValue={loginField.value}
        />
        <Text style={{color: "#f00"}}>
          {loginField.error}
          </Text>
        <TextInput
          style={{ ...styles.input, marginVertical: 20 }}
          placeholder="Password"
          onChangeText={(newText) => setPasswordField({valid: validateRequired(newText), value: newText, error: ""})}
          defaultValue={passwordField.value}
        />
        <Text style={{color: "#f00"}}>{passwordField.error}</Text>
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => {submitForm()}}>
          <Text style={styles.btnText}  >Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 290,
    paddingHorizontal: 10,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#F57600",
  },
  button: {
    backgroundColor: "#F57600",
    height: 50,
    width: 290,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#F57600",
  },
  btnText: {
    color: "white",
    fontSize: 20,
  },
});

export default Login;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Auth = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <View style={{ ...styles.container, backgroundColor: "white" }}>
      <Text style={{ fontSize: 25 }}>Войдите в приложение</Text>
      <View style={{ marginVertical: 10 }}>
        <TouchableOpacity
          style={{ ...styles.button, marginVertical: 50, marginBottom: 10 }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Registration");
        }}
      >
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.button, marginTop: 20}}
        onPress={() => {
          navigation.navigate("CreateForm");
        }}
      >
        <Text style={styles.btnText}>Create Form</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.button, marginTop: 20}}
        onPress={() => {
          navigation.navigate("MainScreen");
        }}
      >
        <Text style={styles.btnText}>MainScreen</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 25,
  },
});

export default Auth;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Registration = ({ navigation }) => {
  const [logText, setLogText] = useState("");
  const [passText, setPassText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20, fontSize: 25 }}>
        Registration screen
      </Text>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          onChangeText={(newText) => setLogText(newText)}
          defaultValue={logText}
        />
        <TextInput
          style={{ ...styles.input, marginVertical: 20 }}
          placeholder="Password"
          onChangeText={(newText) => setPassText(newText)}
          defaultValue={passText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("CreateProfile");
          }}
        >
          <Text style={styles.btnText}>Join In</Text>
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
    borderWidth: 1,
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
    fontSize: 25,
  },
});

export default Registration;

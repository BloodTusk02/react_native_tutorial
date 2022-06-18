import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import { ApiClient } from "../services/ApiClient";
import { AxiosClient, http } from "../services/AxiosClient";
import Icon from "react-native-vector-icons/FontAwesome";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width: WIDTH } = Dimensions.get("window");

const Auth = ({ navigation }) => {
  const [checked, setChecked] = React.useState("specialist");
  const [logText, setLogText] = useState("");
  const [passText, setPassText] = useState("");

  const handleLoginResponse = async (response) => {
    AsyncStorage.setItem("token", response.data.token)
      .then(() => {
        console.log("Всё хорошо!");
        navigation.navigate("MainApp");
      })
      .catch((error) => console.log(error));
  };
  const handleLoginError = (error) => {};

  const login = async () => {
    const http = new AxiosClient();
    console.log("1");
    http.setMethod("post").setParams({
      role: checked,
    });

    await http.sendRequest({
      url: "/auth/login",
      body: {
        login: logText,
        password: passText,
      },
      response: handleLoginResponse,
      error: handleLoginError,
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{ ...styles.scrollViewContainer, backgroundColor: "white" }}
    >
      <View style={{ ...styles.container, marginTop: 270 }}>
        <View
          style={{
            ...styles.container,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View style={styles.radioBtnContainer}>
            <RadioButton
              value="specialist"
              style={{ width: WIDTH - 240, height: 60 }}
              status={checked === "specialist" ? "checked" : "unchecked"}
              onPress={() => setChecked("specialist")}
              color="#F57600"
              onChangeValue={(value) => {}}
            />
          </View>
          <Text style={{ position: "absolute", fontSize: 20, left: 55 }}>
            Specialist
          </Text>
          <View style={styles.radioBtnContainer}>
            <RadioButton
              value="customer"
              style={{ width: WIDTH - 240, height: 60 }}
              status={checked === "customer" ? "checked" : "unchecked"}
              onPress={() => setChecked("customer")}
              color="#F57600"
              onChangeValue={(value) => {}}
            />
          </View>
          <Text style={{ position: "absolute", fontSize: 20, right: 30 }}>
            Customer
          </Text>
        </View>
        <View style={{ ...styles.container }}>
          <View>
            <Icon name="user" style={styles.iconInput} size={25} />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#9a9c9a"
              onChangeText={(newText) => setLogText(newText)}
              defaultValue={logText}
            />
            <Icon
              name="lock"
              style={{ ...styles.iconInput, top: 93 }}
              size={25}
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#9a9c9a"
              onChangeText={(newText) => setPassText(newText)}
              defaultValue={passText}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                await login();
              }}
            >
              <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Registration");
              }}
            >
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    backgroundColor: "rgba(245, 118, 0, 1)",
    height: 60,
    width: WIDTH - 240,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginHorizontal: 13,
    marginVertical: 5,
  },
  btnText: {
    color: "white",
    fontSize: 25,
  },
  textInput: {
    width: WIDTH - 60,
    height: 60,
    borderRadius: 30,
    fontSize: 25,
    paddingHorizontal: 53,
    marginVertical: 5,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
  },
  iconInput: {
    position: "absolute",
    top: 23,
    left: 20,
  },
  radioBtnContainer: {
    width: WIDTH - 240,
    height: 60,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    borderRadius: 30,
    marginHorizontal: 13,
    marginVertical: 5,
    justifyContent: "center",
    paddingLeft: 5,
  },
});

export default Auth;

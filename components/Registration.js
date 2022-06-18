import React, { useState, useEffect } from "react";
import { ApiClient } from "../services/ApiClient";
import { AxiosClient, http } from "../services/AxiosClient";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { RadioButton } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const { width: WIDTH } = Dimensions.get("window");

const Registration = ({ navigation, handleSaveUser }) => {
  const [logText, setLogText] = useState("");
  const [passText, setPassText] = useState("");
  const [checked, setChecked] = React.useState("specialist");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([]);
  const [isShown, setIsShown] = useState("none");

  useEffect(() => {
    if (items.length > 0) {
      return;
    }

    getStates();
  }, []);

  useEffect(() => {
    if (!value) {
      return;
    }
    getLocations().then(() => {
      setIsShown("flex");
    });
  }, [value]);

  const handleRegisterResponse = (response) => {};
  const handleRegisterError = (error) => {};

  const getStates = async () => {
    const http = new AxiosClient();
    http.sendRequest({
      url: "/states",
      response: (res) => {
        const items = res.data.map((val) => {
          return { value: val.id, label: val.name };
        });
        setItems(items);
      },
    });
  };

  const getLocations = async () => {
    const http = new AxiosClient();
    http
      .setParams({
        stateId: value,
      })
      .sendRequest({
        url: "/locations",
        response: (res) => {
          const items = res.data.map((val) => {
            return { value: val.id, label: val.city };
          });
          setItems2(items);
        },
      });
  };

  const register = async () => {
    const http = new AxiosClient();
    console.log("1");
    http.setMethod("post").setParams({
      role: checked,
    });

    await http.sendRequest({
      url: "/auth/registration",
      body: {
        firstName: firstName,
        lastName: lastName,
        email: logText,
        phone: phoneNumber,
        password: passText,
        locationId: value2,
      },
      response: handleRegisterResponse,
      error: handleRegisterError,
    });
  };

  return (
    <View style={{ ...styles.container }}>
      <View style={styles.radioBtnContainer}>
        <View style={styles.insideRadioBtnContainer}>
          <RadioButton
            value="specialist"
            status={checked === "specialist" ? "checked" : "unchecked"}
            onPress={() => setChecked("specialist")}
            color="#F57600"
            onChangeValue={(value) => {}}
          />
          <Text style={{ position: "absolute", fontSize: 20, left: 50 }}>
            Specialist
          </Text>
        </View>
        <View style={styles.insideRadioBtnContainer}>
          <RadioButton
            value="customer"
            status={checked === "customer" ? "checked" : "unchecked"}
            onPress={() => setChecked("customer")}
            color="#F57600"
            onChangeValue={(value) => {}}
          />
          <Text style={{ position: "absolute", fontSize: 20, right: 15 }}>
            Customer
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, maxHeight: 137.5 }}>
        <DropDownPicker
          style={{
            ...styles.input,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "white",
            paddingLeft: 30,
          }}
          containerStyle={{ width: WIDTH - 60 }}
          textStyle={{
            color: "white",
            fontSize: 15,
          }}
          listItemLabelStyle={{
            marginLeft: 20,
          }}
          arrowIconStyle={{
            backgroundColor: "white",
            borderRadius: 10,
            marginRight: 10,
          }}
          dropDownContainerStyle={{
            backgroundColor: "black",
            borderColor: "white",
            borderRadius: 30,
          }}
          placeholder="Select State"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <DropDownPicker
          style={{
            ...styles.input,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            borderColor: "white",
            marginTop: 3,
            paddingLeft: 30,
            display: isShown,
          }}
          containerStyle={{ width: WIDTH - 60 }}
          textStyle={{
            color: "white",
            fontSize: 15,
          }}
          listItemLabelStyle={{
            marginLeft: 20,
          }}
          arrowIconStyle={{
            backgroundColor: "white",
            borderRadius: 10,
            marginRight: 10,
          }}
          dropDownContainerStyle={{
            backgroundColor: "black",
            borderColor: "white",
            borderRadius: 30,
          }}
          placeholder="Select City"
          open={open2}
          value={value2}
          items={items2}
          setOpen={setOpen2}
          setValue={setValue2}
          setItems={setItems2}
          zIndex={1}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollViewContainer}
      >
        <View style={styles.container}>
          <Icon name="user" style={{...styles.iconInput, left: 20}} size={25} />
          <TextInput
            style={{ ...styles.input, paddingLeft: 50 }}
            placeholder="Email"
            onChangeText={(newText) => setLogText(newText)}
            defaultValue={logText}
          />
          <Icon
            name="lock"
            style={{ ...styles.iconInput, top: 92, left: 20 }}
            size={25}
          />
          <TextInput
            style={{ ...styles.input, paddingLeft: 50 }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(newText) => setPassText(newText)}
            defaultValue={passText}
          />
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <TextInput
              style={{ ...styles.input }}
              placeholder="First Name"
              onChangeText={(newText) => setFirstName(newText)}
              defaultValue={firstName}
            />
            <TextInput
              style={{ ...styles.input }}
              placeholder="Last Name"
              onChangeText={(newText) => setLastName(newText)}
              defaultValue={lastName}
            />
            <TextInput
              style={{ ...styles.input }}
              placeholder="Phone Number"
              onChangeText={(newText) => setPhoneNumber(newText)}
              defaultValue={phoneNumber}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await register();
        }}
      >
        <Text style={styles.btnText}>Join In</Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: "white",
  },
  iconInput: {
    position: "absolute",
    top: 21,
    left: 50,
  },
  input: {
    height: 60,
    width: WIDTH - 60,
    paddingHorizontal: 10,
    fontSize: 20,
    borderRadius: 30,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    marginVertical: 5,
    paddingLeft: 20,
    // borderColor: "#F57600",
  },
  button: {
    backgroundColor: "#F57600",
    height: 60,
    width: WIDTH - 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginVertical: 5,
  },
  btnText: {
    color: "white",
    fontSize: 25,
  },
  radioBtnContainer: {
    flex: 1,
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 60,
    width: WIDTH - 40,
    marginBottom: 5,
  },
  insideRadioBtnContainer: {
    flex: 1,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    justifyContent: "center",
    borderRadius: 30,
    height: 60,
    paddingLeft: 15,
    marginHorizontal: 10,
  },
});

export default Registration;

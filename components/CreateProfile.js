import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DropDownPicker from "react-native-dropdown-picker";

const CreateProfile = () => {
  const [image, setImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Sochi", value: "sochi" },
    { label: "Novosibirsk", value: "novosibirsk" },
  ]);

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
        {image && (
          <Image source={{ uri: image }} style={styles.profileImage}></Image>
        )}
        <TouchableOpacity
          onPress={uploadImage}
          style={{ ...styles.button, marginTop: 30 }}
        >
          <Text style={styles.btnText}>Upload Image</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DropDownPicker
          style={{
            ...styles.input,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
          containerStyle={{ width: 290 }}
          dropDownContainerStyle={{ backgroundColor: "white", borderColor: "#F57600" }}
          placeholder="Select City"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TextInput
          style={{ ...styles.input, marginVertical: 20 }}
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
          style={{ ...styles.input, marginVertical: 20 }}
          placeholder="Phone Number"
          onChangeText={(newText) => setPhoneNumber(newText)}
          defaultValue={phoneNumber}
        />
        <TouchableOpacity style={{...styles.button, backgroundColor: "black", borderColor: "black"}}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    fontSize: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 20,
    borderColor: "#F57600",
    borderWidth: 2
  },
});

export default CreateProfile;

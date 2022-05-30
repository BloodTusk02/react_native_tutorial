import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const CreateForm = ({ navigation }) => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Сантехника", value: "plumbing" },
    { label: "Недвижимость", value: "real_estate" },
    { label: "Автоподбор", value: "autosampling" },
    { label: "Малярные работы", value: "painting_work" },
  ]);

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={{ ...styles.container, marginVertical: 20 }}>
        <Text style={{ fontSize: 30 }}>Заполните анкету</Text>
      </View>
      <View style={{ ...styles.container }}>
        <DropDownPicker
          style={{
            ...styles.input,
            backgroundColor: "white",
            marginBottom: 20,
          }}
          containerStyle={{ width: 290 }}
          dropDownContainerStyle={{ backgroundColor: "white", borderColor: "#F57600" }}
          placeholder="Select category"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <TextInput
          style={{ ...styles.input }}
          placeholder="Subject"
          onChangeText={(newText) => setSubject(newText)}
          defaultValue={subject}
        />
        <TextInput
          style={{
            ...styles.input,
            height: 100,
            textAlignVertical: "top",
            marginVertical: 20,
          }}
          multiline={true}
          placeholder="Description"
          onChangeText={(newText) => setDescription(newText)}
          defaultValue={description}
        />
        <TextInput
          style={{ ...styles.input, marginBottom: 20 }}
          placeholder="Set Price"
          onChangeText={(newText) => setPrice(newText)}
          defaultValue={price}
        />
        <TouchableOpacity style={{ ...styles.button }}>
          <Text style={styles.btnText}>Create form</Text>
        </TouchableOpacity>
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
});

export default CreateForm;

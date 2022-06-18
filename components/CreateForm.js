import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const { width: WIDTH } = Dimensions.get("window");

const CreateForm = ({ navigation }) => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "IT-Sphere", value: "plumbing" },
    { label: "Medicine", value: "real_estate" },
    { label: "Small and medium business", value: "autosampling" },
    { label: "Household services", value: "painting_work" },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: "System administrator", value: "plumbing" },
    { label: "forum moderator", value: "real_estate" },
    { label: "Programmer", value: "autosampling" },
    { label: "Tester", value: "painting_work" },
    { label: "Information security specialist", value: "plumbing1" },
    { label: "Systems analyst", value: "real_estate1" },
    { label: "Game designer", value: "autosampling1" },
    { label: "Teamlead", value: "painting_work1" },
  ]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.createFormHeader}>
        <Text style={styles.createFormText}>Create Form</Text>
      </View>
      <DropDownPicker
        style={styles.dropDownContainer}
        containerStyle={{ width: WIDTH - 30 }}
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
        placeholder="Select Scope"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        zIndex={3}
      />
      <DropDownPicker
        style={styles.dropDownContainer}
        containerStyle={{ width: WIDTH - 30 }}
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
        placeholder="Select Category"
        open={open2}
        value={value2}
        items={items2}
        setOpen={setOpen2}
        setValue={setValue2}
        setItems={setItems2}
        zIndex={2}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollViewContainer}
      >
        <View style={styles.createFormContainer}>
          <TextInput
              style={styles.textInput}
              placeholder="Subject"
              placeholderTextColor="#9a9c9a"
              onChangeText={(newText) => setSubject(newText)}
              defaultValue={subject}
          />
          <TextInput
              style={{...styles.textInput, height: 180}}
              placeholder="Description"
              placeholderTextColor="#9a9c9a"
              multiline={true}
              onChangeText={(newText) => setDescription(newText)}
              defaultValue={description}
          />
          <TextInput
              style={styles.textInput}
              placeholder="Price"
              placeholderTextColor="#9a9c9a"
              onChangeText={(newText) => setPrice(newText)}
              defaultValue={price}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("MainApp");
        }}
      >
        <Text style={styles.btnText}>Finalize</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  createFormHeader: {
    marginTop: 40,
    flex: 1,
    width: WIDTH - 30,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    borderRadius: 20,
    maxHeight: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  createFormText: {
    fontSize: 30,
  },
  dropDownContainer: {
    width: WIDTH - 30,
    backgroundColor: "black",
    borderColor: "white",
    paddingLeft: 30,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  createFormContainer: {
    width: WIDTH - 30,
    borderRadius: 30,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    alignItems: "center",
    paddingVertical: 10,
  },
  textInput: {
    width: WIDTH - 60,
    height: 60,
    borderRadius: 30,
    fontSize: 25,
    paddingHorizontal: 20,
    marginVertical: 5,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "rgba(245, 118, 0, 1)",
    height: 60,
    width: WIDTH - 30,
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
});

export default CreateForm;

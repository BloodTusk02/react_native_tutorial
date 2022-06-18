import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Footer } from "./Footer";

const MainScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
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
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50, position: "absolute", top: 636, left: 330 }}
          // source={require('')}
        />
        <TextInput
          style={{...styles.input, marginVertical: 20}}
          placeholder="Search"
          onChangeText={(newText) => setSearch(newText)}
          defaultValue={search}
        />
        <DropDownPicker
          style={{
            ...styles.input,
            backgroundColor: "white",
            marginBottom: 20,
          }}
          containerStyle={{ width: 350 }}
          dropDownContainerStyle={{ backgroundColor: "white" }}
          placeholder="Select category"
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
        <View style={{ ...styles.formView, flexDirection: "row", alignItems: "flex-start" }}>
          <Image
            style={styles.imageInForm}
            // source={require('')}
          />
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={styles.specialistName}>
                Rozhnov Roman Igorevich
            </Text>
            <Text style={styles.specialistDesc}>
              I help you find a car {"\n"}for your needs
            </Text>
            <View style={{ flexDirection: "row", marginTop: 1 }}>
              <Text style={styles.specialistRating}>
                5
              </Text>
              <Image
                style={styles.ratingIcon}
                // source={require('./img/star.png')}
              />
            </View>
            <Text style={styles.specialistReviews}>
              11 Reviews
            </Text>
          </View>
        </View>
        <View style={{ ...styles.formView, flexDirection: "row", alignItems: "flex-start" }}>
          <Image
            style={styles.imageInForm}
            // source={require('')}
          />
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={styles.specialistName}>
              Ryan Thomas Gosling
            </Text>
            <Text style={styles.specialistDesc}>
              Personal driver,{"\n"}Cargo transportation
            </Text>
            <View style={{ flexDirection: "row", marginTop: 1 }}>
              <Text style={styles.specialistRating}>
                5
              </Text>
              <Image
                style={styles.ratingIcon}
                // source={require('./img/star.png')}
              />
            </View>
            <Text style={styles.specialistReviews}>
              93 Reviews
            </Text>
          </View>
        </View>
        <View style={{ ...styles.formView, flexDirection: "row", alignItems: "flex-start" }}>
          <Image
            style={styles.imageInForm}
            // source={require('')}
          />
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={styles.specialistName}>
              Cillian Murphy
            </Text>
            <Text style={styles.specialistDesc}>
              Resolving personal {"\n"}conflicts
            </Text>
            <View style={{ flexDirection: "row", marginTop: 1 }}>
              <Text style={styles.specialistRating}>
                4.91
              </Text>
              <Image
                style={styles.ratingIcon}
                // source={require('./img/star.png')}
              />
            </View>
            <Text style={styles.specialistReviews}>
              47 Reviews
            </Text>
          </View>
        </View>
        <View style={{ ...styles.formView, flexDirection: "row", alignItems: "flex-start" }}>
          <Image
            style={styles.imageInForm}
            // source={require('')}
          />
          <View style={{ justifyContent: "center", marginLeft: 10 }}>
            <Text style={styles.specialistName}>
              Benedict Cumberbatch
            </Text>
            <Text style={styles.specialistDesc}>
              I help you find a car {"\n"}for your needs
            </Text>
            <View style={{ flexDirection: "row", marginTop: 1 }}>
              <Text style={styles.specialistRating}>
                5
              </Text>
              <Image
                style={styles.ratingIcon}
                // source={require('./img/star.png')}
              />
            </View>
            <Text style={styles.specialistReviews}>
              11 Reviews
            </Text>
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
  input: {
    height: 50,
    width: 350,
    paddingHorizontal: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#F57600",
  },
  btnText: {
    color: "black",
  },
  formView: {
    width: 350,
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F57600",
    marginBottom: 20,
  },
  imageInForm: {
    width: 130,
    height: 130,
    borderRadius: 100,
    marginLeft: 5,
    marginTop: 10,
  },
  specialistName: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: -5
  },
  specialistDesc: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: -5
  },
  specialistRating: {
    fontSize: 15,
    marginLeft: -6,
  },
  ratingIcon: {
    width: 20,
    height: 20,
    marginLeft: 3,
  },
  specialistReviews: {
    fontSize: 15,
    marginLeft: -6
  },
});

export default MainScreen;

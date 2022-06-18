//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Footer } from "./Footer";
import Icon from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkAuth } from "./AuthProvider";
import * as ImagePicker from "expo-image-picker";
// import jwtDecode from "jwt-decode";

// var token = "";
// var decoded = jwtDecode(token);
// var decodedHandler = jwtDecode(token, {header: true});

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

// create a component
const Account = ({ navigation }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function checkImage() {
      try {
        let recoveryImage = await AsyncStorage.getItem("image");
        setImage(recoveryImage);
      } catch (error) {
        console.log("Изображение отсутствует.");
      }
    }
    checkImage();
  }, []);

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
      AsyncStorage.setItem("image", result.uri);
    }
  };

  const [token, setToken] = useState(null);

  useEffect(() => {
    async function checkToken() {
      let authToken = await checkAuth();
      if (authToken === null || "") {
        console.log("Токен отсутствует.");
        navigation.navigate("Auth");
      }

      setToken(authToken);
      console.log(token);
    }

    checkToken();
  }, [token]);

  return (
    <View style={styles.container}>
      <View style={styles.accountContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            AsyncStorage.removeItem("token")
              .then((result) => {
                console.log(result);
                setToken("");
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <Icon style={styles.logoutIcon} name="door-open" size={25} />
        </TouchableOpacity>
        <Icon style={{ ...styles.logoutButton, left: 300, top: 120, color: "white", paddingTop: 11, paddingLeft: 14 }} name="pen" size={25} />
        <TouchableOpacity
          style={{ ...styles.logoutButton, left: 15, top: 120 }}
          onPress={() => {
            AsyncStorage.removeItem("image")
              .then((result) => {
                console.log(result);
                setImage(null);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <Icon style={styles.logoutIcon} name="trash" size={25} />
        </TouchableOpacity>
        <View
          style={{
            ...styles.accountImage,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {image && (
            <Image source={{ uri: image }} style={styles.imageInForm}></Image>
          )}
          <TouchableOpacity
            onPress={uploadImage}
            style={{ ...styles.setImageButton }}
          >
            <Icon
              name="upload"
              style={{ ...styles.setImageButtonIcon, bottom: 2 }}
              size={30}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.accountInfo}>
          <View style={styles.accountLabel}>
          <Text style={{fontSize: 25, alignItems: "center"}}>First Name: </Text>
            <Text style={styles.accountLabelText}>Roman</Text>
          </View>
          <View style={styles.accountLabel}>
            <Text style={{fontSize: 25, alignItems: "center"}}>Second Name: </Text>
            <Text style={styles.accountLabelText}>Rozhnov</Text>
          </View>
          <View style={styles.accountLabel}>
          <Text style={{fontSize: 25, alignItems: "center"}}>Phone: </Text>
            <Text style={styles.accountLabelText}>79832730680</Text>
          </View>
          <View style={styles.accountLabel}>
          <Text style={{fontSize: 25, alignItems: "center"}}>State: </Text>
            <Text style={styles.accountLabelText}>La Pampa</Text>
          </View>
          <View style={styles.accountLabel}>
          <Text style={{fontSize: 25, alignItems: "center"}}>City: </Text>
            <Text style={styles.accountLabelText}>Trenel</Text>
          </View>
        </View>
      </View>
      <Footer style={{ justifyContent: "flex-end" }} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  accountContainer: {
    flex: 1,
  },
  accountImage: {
    flex: 1,
    width: WIDTH - 30,
    height: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  accountInfo: {
    flex: 2,
    width: WIDTH - 30,
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "rgba(115, 114, 114, 0.2)",
    borderRadius: 20,
    marginBottom: 10,
    paddingVertical: 10,
  },
  imageInForm: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginLeft: 5,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#F57600",
  },
  setImageButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(245, 118, 0, 1)",
    left: 15,
  },
  setImageButtonIcon: {
    color: "white",
  },
  accountLabel: {
    paddingTop: 10,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    width: WIDTH - 60,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    flexDirection: "row"
  },
  accountLabelText: {
    fontSize: 25,
    color: "rgba(245, 118, 0, 1)",
  },
  logoutButton: {
    flex: 1,
    height: 50,
    width: 50,
    backgroundColor: "rgba(245, 118, 0, 1)",
    position: "absolute",
    zIndex: 10,
    borderRadius: 25,
    top: 50,
    left: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutIcon: {
    color: "white",
  },
});

//make this component available to the app
export default Account;

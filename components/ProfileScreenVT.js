import React from "react";
import { Footer } from "./Footer";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from "react-native";

const { width: WIDTH } = Dimensions.get("window");

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <Image style={styles.imageInForm} source={require("./img/2.jpg")} />
          <View style={styles.profileScreenContainer}>
            <Text style={{ fontSize: 25 }}>Vurhiz Tillot</Text>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
              Drafting of letters, {"\n"}contracts and statements{"\n"}to the
              court.
              {"\n"}
              {"\n"}My main qualities:
              {"\n"}-General culture and broad outlook.
              {"\n"}-Punctuality, commitment.
              {"\n"}
              {"\n"}Price: 1000$/hour
            </Text>
            <View>
              <View
                style={{ marginTop: 1, flexDirection: "row", marginTop: 20 }}
              >
                <Text style={{ fontSize: 20 }}>5</Text>
                <Image
                  style={styles.ratingIcon}
                  source={require("./img/star.png")}
                />
              </View>
              <Text style={{ fontSize: 23 }}>11 Reviews</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: "black",
              borderColor: "black",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Text style={styles.btnText}>Add Review</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: "#F57600",
              borderColor: "#F57600",
              marginBottom: 30,
            }}
          >
            <Text style={styles.btnText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 30,
  },
  container: {
    flex: 1,
    alignItems: "center",
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
  imageInForm: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 10,
    borderColor: "#F57600",
    borderWidth: 2,
  },
  ratingIcon: {
    width: 30,
    height: 30,
    marginLeft: 3,
  },
  profileScreenContainer: {
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    borderRadius: 30,
    width: WIDTH - 30,
    paddingLeft: 30,
    marginTop: 20,
  },
});

export default ProfileScreen;

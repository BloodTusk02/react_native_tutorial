//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Footer } from "./Footer";
import Icon from "react-native-vector-icons/FontAwesome5";
import { checkAuth } from "./AuthProvider";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

// create a component
const MainApp = ({ navigation }) => {
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
    <View style={styles.mainContainer}>
      <View style={styles.searchBarContainer}>
        <Icon style={styles.searchIcon} name="search" size={25} />
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity
          style={styles.addFormButton}
          onPress={() => {
            navigation.navigate("CreateForm");
          }}
        >
          <Icon style={styles.addFormIcon} name="plus" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollViewContainer}
      >
        <View style={styles.offersContainer}>
          <View style={styles.insideOffersContainer}>
            <View style={styles.offerCard}>
              <Image
                style={styles.offerCardImage}
                source={require("./img/1.jpg")}
              />
              <View style={styles.offerCardTexts}>
                <Text style={styles.offerCardTextName}>Alex Valdene</Text>
                <Text style={styles.offerCardTextDesc}>
                  Organizing concerts
                </Text>
                <Image
                  style={{ ...styles.ratingIcon, marginLeft: 33 }}
                  source={require("./img/star.png")}
                />
                <Text style={styles.offerCardTextRate}>4.5</Text>
                <Text style={styles.offerCardTextReviews}>13 Reviews</Text>
              </View>
            </View>
            <View style={styles.offerCard}>
              <Image
                style={styles.offerCardImage}
                source={require("./img/2.jpg")}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProfileScreenVT");
                }}
              >
                <View style={styles.offerCardTexts}>
                  <Text style={styles.offerCardTextName}>Vurhiz Tillot</Text>
                  <Text style={styles.offerCardTextDesc}>Legal assistance</Text>
                  <Image
                    style={{ ...styles.ratingIcon, marginLeft: 33 }}
                    source={require("./img/star.png")}
                  />
                  <Text style={styles.offerCardTextRate}>4.7</Text>
                  <Text style={styles.offerCardTextReviews}>76 Reviews</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.offerCard}>
              <Image
                style={styles.offerCardImage}
                source={require("./img/3.jpg")}
              />
              <View style={styles.offerCardTexts}>
                <Text style={styles.offerCardTextName}>Ryan Gosling</Text>
                <Text style={styles.offerCardTextDesc}>
                  Cargo transportation
                </Text>
                <Image
                  style={styles.ratingIcon}
                  source={require("./img/star.png")}
                />
                <Text style={styles.offerCardTextRate}>5</Text>
                <Text style={styles.offerCardTextReviews}>43 Reviews</Text>
              </View>
            </View>
            <View style={styles.offerCard}>
              <Image
                style={styles.offerCardImage}
                source={require("./img/4.jpg")}
              />
              <View style={styles.offerCardTexts}>
                <Text style={styles.offerCardTextName}>Jake Jhonsons</Text>
                <Text style={styles.offerCardTextDesc}>Programmer</Text>
                <Image
                  style={{ ...styles.ratingIcon, marginLeft: 33 }}
                  source={require("./img/star.png")}
                />
                <Text style={styles.offerCardTextRate}>4.1</Text>
                <Text style={styles.offerCardTextReviews}>18 Reviews</Text>
              </View>
            </View>
            <View style={styles.offerCard}>
              <Image
                style={styles.offerCardImage}
                source={require("./img/5.jpg")}
              />
              <View style={styles.offerCardTexts}>
                <Text style={styles.offerCardTextName}>Sam Grayms</Text>
                <Text style={styles.offerCardTextDesc}>Medical advice</Text>
                <Image
                  style={{ ...styles.ratingIcon, marginLeft: 33 }}
                  source={require("./img/star.png")}
                />
                <Text style={styles.offerCardTextRate}>3.9</Text>
                <Text style={styles.offerCardTextReviews}>21 Reviews</Text>
              </View>
            </View>
            <View style={styles.offerCard}>
              <Image
                style={styles.offerCardImage}
                source={require("./img/6.jpg")}
              />
              <View style={styles.offerCardTexts}>
                <Text style={styles.offerCardTextName}>Ada Mallin</Text>
                <Text style={styles.offerCardTextDesc}>Tutoring</Text>
                <Image
                  style={{ ...styles.ratingIcon, marginLeft: 33 }}
                  source={require("./img/star.png")}
                />
                <Text style={styles.offerCardTextRate}>4.9</Text>
                <Text style={styles.offerCardTextReviews}>79 Reviews</Text>
              </View>
            </View>
            <View style={styles.offerCard}>
              <Image
                style={styles.offerCardImage}
                source={require("./img/7.jpg")}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ProfileScreen");
                }}
              >
                <View style={styles.offerCardTexts}>
                  <Text style={styles.offerCardTextName}>Roman Rozhnov</Text>
                  <Text style={styles.offerCardTextDesc}>Car selection</Text>
                  <Image
                    style={{ ...styles.ratingIcon, bottom: 33 }}
                    source={require("./img/star.png")}
                  />
                  <Text style={styles.offerCardTextRate}>5</Text>
                  <Text style={styles.offerCardTextReviews}>8 Reviews</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "white",
    showsVerticalScrollIndicator: "false",
  },
  searchBarContainer: {
    flex: 1,
    backgroundColor: "rgba(245, 118, 0, 1)",
    width: WIDTH - 30,
    marginTop: 40,
    borderRadius: 20,
    marginBottom: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    maxHeight: 60,
  },
  offersContainer: {
    flex: 1,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    width: WIDTH - 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  insideOffersContainer: {
    flex: 1,
    width: WIDTH - 63,
    marginTop: 15,
  },
  searchIcon: {
    left: 10,
    marginHorizontal: 10,
    color: "white",
    zIndex: 1,
  },
  addFormIcon: {
    color: "white",
    position: "absolute",
    right: 16,
  },
  addFormButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    height: 60,
    marginHorizontal: 15,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    width: WIDTH - 150,
    borderRadius: 0,
    paddingLeft: 23,
    fontSize: 23,
    zIndex: 2,
  },
  offerCard: {
    borderRadius: 20,
    backgroundColor: "white",
    height: 150,
    marginBottom: 10,
    flexDirection: "row",
  },
  logoutButton: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: "black",
  },
  offerCardImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(245, 118, 0, 1)",
    alignSelf: "center",
    marginLeft: 10,
  },
  offerCardTexts: {
    marginTop: 10,
    marginLeft: 10,
  },
  offerCardTextName: {
    fontSize: 20,
    color: "#F57600",
  },
  offerCardTextDesc: {
    fontSize: 17,
    color: "#F57600",
  },
  offerCardTextRate: {
    fontSize: 20,
    marginTop: 25,
  },
  ratingIcon: {
    position: "absolute",
    width: 20,
    height: 20,
    marginLeft: 14,
    bottom: 38,
  },
  offerCardTextReviews: {
    fontSize: 20,
  },
});

//make this component available to the app
export default MainApp;

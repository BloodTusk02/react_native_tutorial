//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Footer } from "./Footer";
import { checkAuth } from "./AuthProvider";

const { width: WIDTH } = Dimensions.get("window");
const { height: HEIGHT } = Dimensions.get("window");

// create a component
const MyOrders = ({ navigation }) => {
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
      <View style={styles.myOrderHeader}>
        <Text style={{ fontSize: 30 }}>My Orders</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollViewContainer}
      >
        <View style={styles.myOrdersContainer}>
          <View style={styles.insideMyOffersContainer}>
            <View style={styles.myOffersCard}>
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
            <View style={styles.myOffersCard}></View>
            <View style={styles.myOffersCard}></View>
            <View style={styles.myOffersCard}></View>
            <View style={styles.myOffersCard}></View>
            <View style={styles.myOffersCard}></View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  myOrderHeader: {
    flex: 1,
    width: WIDTH - 30,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    borderRadius: 20,
    marginTop: 40,
    maxHeight: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  myOrdersContainer: {
    flex: 1,
    width: WIDTH - 30,
    height: HEIGHT + 200,
    backgroundColor: "rgba(245, 118, 0, 0.15)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  insideMyOffersContainer: {
    flex: 1,
    width: WIDTH - 63,
    marginTop: 15,
  },
  myOffersCard: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "white",
    height: 150,
    marginBottom: 10,
    flexDirection: "row",
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

export default MyOrders;

//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Link } from "@react-navigation/native";

const { width: WIDTH } = Dimensions.get("window");

// create a component
export const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <View style={styles.footerContainerItems}>
          <Link to={{ screen: "Account" }}>
            <Icon style={styles.iconStyle} name="user" size={30} />
          </Link>
          <Link to={{ screen: "MainApp" }}>
            <Icon style={styles.iconStyle} name="list" size={30} />
          </Link>
          <Link to={{ screen: "MyOrders" }}>
            <Icon style={styles.iconStyle} name="calendar" size={30} />
          </Link>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    width: WIDTH,
    height: 60,
    backgroundColor: "#F57600",
    borderRadius: 20,
  },
  footerContainerItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 70,
  },
  iconStyle: {
    color: "white",
  },
});
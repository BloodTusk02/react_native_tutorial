import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const ProfileScreen = () => {

    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Image
                    style={styles.imageInForm}
                    source={require('./img/img1.jpg')}
                />
                <View style={{  }}>
                    <Text style={{ fontSize: 30}}>
                        Rozhnov Roman Igorevich
                    </Text>
                    <Text style={{fontSize: 25, marginTop: 20}}>
                        I help you find a car {"\n"}for your needs{"\n"}{"\n"}My main qualities:
                        {"\n"}-Speed of execution.
                        {"\n"}-Literate approach
                        {"\n"}-Big experience
                    </Text>
                        <View style={{ marginTop: 1, flexDirection: "row", marginTop: 20 }}>
                            <Text style={{ fontSize: 23}}>
                                5
                            </Text>
                            <Image
                                style={styles.ratingIcon}
                                source={require('./img/star.png')}
                            />
                        </View>
                    <Text style={{ fontSize: 23}}>
                        11 Reviews
                    </Text>
                </View>
                <TouchableOpacity style={{...styles.button, backgroundColor: "black", borderColor: "black", marginTop: 20, marginBottom: 10}}>
                    <Text style={styles.btnText}>Add Review</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.button, backgroundColor: "#F57600", borderColor: "#F57600"}}>
                    <Text style={styles.btnText}>Contact</Text>
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
        borderWidth: 2
    },
    ratingIcon: {
        width: 30,
        height: 30,
        marginLeft: 3,
    },
});

export default ProfileScreen;
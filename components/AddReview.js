import React, { useState } from 'react';
import { Text, ScrollView, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";
import { RadioButton } from 'react-native-paper';

const AddReview = () => {
    
    const [checked, setChecked] = React.useState('first');
    const [description, setDescription] = useState("");

    return (
        <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Text style={{fontSize:35, marginTop: 10}}>
                    Rate it
                </Text>
                <View style={{flexDirection: "row", marginTop: 10}}>
                    <RadioButton
                        value="first"
                        status={ checked === 'first' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('first')}
                        color="#F57600"
                    />
                    <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                        color="#F57600"
                    />
                    <RadioButton
                        value="third"
                        status={ checked === 'third' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('third')}
                        color="#F57600"
                    />
                    <RadioButton
                        value="fourth"
                        status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('fourth')}
                        color="#F57600"
                    />
                    <RadioButton
                        value="fifth"
                        status={ checked === 'fifth' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('fifth')}
                        color="#F57600"
                    />
                </View>
                <View style={{flexDirection: "row", marginTop: -5}}>
                        <Text style={{fontSize:23}}>
                            1    2    3   4   5
                        </Text>
                    </View>
                <TextInput
                    style={{
                        ...styles.input,
                        height: 250,
                        textAlignVertical: "top",
                        marginVertical: 20,
                    }}
                    multiline={true}
                    placeholder="Description"
                    onChangeText={(newText) => setDescription(newText)}
                    defaultValue={description}
                />
                <TouchableOpacity style={{...styles.button, backgroundColor: "black", borderColor: "black"}}>
                    <Text style={styles.btnText}>Send Review</Text>
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
        height: 90,
        width: 360,
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

export default AddReview;
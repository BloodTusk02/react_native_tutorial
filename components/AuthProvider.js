import AsyncStorage from "@react-native-async-storage/async-storage";

export async function checkAuth() {
    let token = null;
    await AsyncStorage.getItem("token", (error, result) => {
        if (error) {
          console.log(error)
          return
        } 
        token = result;
    });
     
    return token;
}
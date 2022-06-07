import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateProfile from "./components/CreateProfile";
import CreateForm from "./components/CreateForm";
import MainScreen from "./components/MainScreen";
import ProfileScreen from "./components/ProfileScreen";
import AddReview from "./components/AddReview";

const Stack = createNativeStackNavigator();

export default function App() {

  const [appState, setAppState] = useState({
    users: []
  });

  const registerUser = (newUser) => {
    console.log(newUser);
    setAppState({users: {newUser, ...appState.users}});
}


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ title: "Login Screen" }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration">
          {props => <Registration {...props} handleSaveUser={registerUser}/>}
        </Stack.Screen>
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
        <Stack.Screen name="CreateForm" component={CreateForm} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="AddReview" component={AddReview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

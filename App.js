import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Registration from "./components/Registration";
import CreateProfile from "./components/CreateProfile";
import CreateForm from "./components/CreateForm";
import MainScreen from "./components/MainScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ title: "Login Screen" }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
        <Stack.Screen name="CreateForm" component={CreateForm} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useEffect, useState } from "react";
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
import MainApp from "./components/MainApp";
import MyOrders from "./components/MyOrders";
import Account from "./components/Account";
import OffersScreen from "./components/OffersScreen";
import ProfileScreenVT from "./components/ProfileScreenVT";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ title: "Login Screen" }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
        <Stack.Screen name="CreateForm" component={CreateForm} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ProfileScreenVT" component={ProfileScreenVT} />
        <Stack.Screen name="AddReview" component={AddReview} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="OffersScreen" component={OffersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

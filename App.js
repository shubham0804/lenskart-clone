import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainDrawerNavigator from "./App/navigation/DrawerNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <MainDrawerNavigator />
        </NavigationContainer>
    );
}

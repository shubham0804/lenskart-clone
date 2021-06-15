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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainDrawerNavigator from "./App/navigation/DrawerNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <MainDrawerNavigator />
        </NavigationContainer>
    );
}

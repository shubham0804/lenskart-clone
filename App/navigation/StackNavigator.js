import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreenStack from "../screens/HomeScreenStack";

const Stack = createStackNavigator();

const MainStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreenStack}
            options={{
                headerTitleStyle: {
                    backgroundColor: "red",
                    color: "rgba(0,122,255,1)",
                },
                headerTintColor: "red",
            }}
        />
    </Stack.Navigator>
);

export { MainStackNavigator };

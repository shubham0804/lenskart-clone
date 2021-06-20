import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContent";
import HomeScreenStack from "../screens/HomeScreenStack";

const Drawer = createDrawerNavigator();

const isSwipeEnabled = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeScreen";
    if (routeName === "VideoScreen" || routeName === "SearchScreen") return false;
};

const MainDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerStyle={{ width: "90%" }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreenStack}
                options={({ route }) => ({ swipeEnabled: isSwipeEnabled(route) })}
            />
        </Drawer.Navigator>
    );
};

export default MainDrawerNavigator;

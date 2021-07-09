import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContent";
import HomeScreenStack from "../screens/HomeScreenStack";
import CategoryListScreen from "../screens/CategoryListScreen";
import { HeaderBackButton } from "@react-navigation/stack";
import { HeaderRight } from "../components/Header";

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
            <Drawer.Screen
                name="CategoryListScreen"
                component={CategoryListScreen}
                options={{
                    headerLeft: (props) => (
                        <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
                    ),
                    headerRight: () => <HeaderRight navigation={navigation} wallet={false} />,
                    headerTintColor: "white",
                    headerTitle: "Pass Cat. Name",
                }}
            />
        </Drawer.Navigator>
    );
};

export default MainDrawerNavigator;

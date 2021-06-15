import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/DrawerContent";
import HomeScreenStack from "../screens/HomeScreenStack";

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => (
    <Drawer.Navigator
        drawerStyle={{ width: "98%" }}
        drawerContent={(props) => <DrawerContent {...props} />}
    >
        <Drawer.Screen name="HomeScreen" component={HomeScreenStack} />
    </Drawer.Navigator>
);

export default MainDrawerNavigator;

import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import RippleImage from "./RippleImage";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const HeaderRight = ({ navigation, wallet }) => {
    return (
        <View style={styles.container}>
            {/* Search */}
            <RippleImage
                rippleColor="rgba(255,255,255, 0.5)"
                imageSource={require("../assets/icons/header/search.png")}
                imageStyle={styles.icon}
                rippleCentered={true}
                rippleSize={40}
                onPress={() => navigation.navigate("SearchScreen")}
            />
            {/* Wallet */}
            {wallet && (
                <RippleImage
                    rippleColor="rgba(255,255,255, 0.5)"
                    imageSource={require("../assets/icons/header/wallet.png")}
                    imageStyle={styles.icon}
                    rippleCentered={true}
                    rippleSize={40}
                />
            )}
            {/* Favorites */}
            <RippleImage
                rippleColor="rgba(255,255,255, 0.5)"
                imageSource={require("../assets/icons/header/favorite.png")}
                imageStyle={styles.icon}
                rippleCentered={true}
                rippleSize={40}
            />
            {/* Cart */}
            <RippleImage
                rippleColor="rgba(255,255,255, 0.5)"
                imageSource={require("../assets/icons/header/cart.png")}
                imageStyle={styles.icon}
                rippleCentered={true}
                rippleSize={40}
                onPress={() => navigation.navigate("CartScreen")}
            />
        </View>
    );
};

const HeaderLeft = ({ navigation }) => {
    // console.log(navigation);
    return (
        <Pressable onPress={() => navigation.openDrawer()}>
            <MaterialCommunityIcons
                name="menu"
                color="white"
                size={25}
                style={{ marginLeft: 15 }}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    icon: {
        width: 25,
        height: 25,
        tintColor: "white",
        margin: 12,
    },
});

export { HeaderRight, HeaderLeft };

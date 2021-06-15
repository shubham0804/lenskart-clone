import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import RippleImage from "./RippleImage";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const HeaderRight = () => (
    <View style={styles.container}>
        <RippleImage
            rippleColor="rgba(255,255,255, 0.5)"
            // rippleStyle={styles.lockdownImagePressable}
            imageSource={require("../assets/icons/header/search.png")}
            imageStyle={styles.icon}
            rippleCentered={true}
            rippleSize={40}
        />
        {/* <Image source={require("../assets/icons/header/search.png")} style={styles.icon} /> */}
        <RippleImage
            rippleColor="rgba(255,255,255, 0.5)"
            // rippleStyle={styles.lockdownImagePressable}
            imageSource={require("../assets/icons/header/wallet.png")}
            imageStyle={styles.icon}
            rippleCentered={true}
            rippleSize={40}
        />
        <RippleImage
            rippleColor="rgba(255,255,255, 0.5)"
            // rippleStyle={styles.lockdownImagePressable}
            imageSource={require("../assets/icons/header/favorite.png")}
            imageStyle={styles.icon}
            rippleCentered={true}
            rippleSize={40}
        />
        <RippleImage
            rippleColor="rgba(255,255,255, 0.5)"
            // rippleStyle={styles.lockdownImagePressable}
            imageSource={require("../assets/icons/header/cart.png")}
            imageStyle={styles.icon}
            rippleCentered={true}
            rippleSize={40}
        />
    </View>
);

const HeaderLeft = ({ navigation }) => (
    <Pressable onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcons name="menu" color="white" size={25} style={{ marginLeft: 15 }} />
    </Pressable>
);

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

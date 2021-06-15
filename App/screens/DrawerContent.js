import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from "react-native";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { drawerItems } from "../data";

export default function DrawerContent(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "#F7F8FA" }}>
            {/* Header */}
            <View style={styles.header}>
                {/* Header Background */}
                <ImageBackground
                    source={require("../assets/images/drawer-header.webp")}
                    resizeMode="contain"
                    style={styles.image}
                >
                    {/* Header Overlay */}
                    <View style={styles.overlay}>
                        {/* Avatar Pic Section */}
                        <View style={styles.avatarSection}>
                            {/* Avatar Pic */}
                            <View style={styles.avatar}>
                                <Image
                                    source={require("../assets/images/gender-male.png")}
                                    style={styles.avatarImage}
                                    resizeMode="cover"
                                />
                            </View>
                            {/* "My Account" Button */}
                            <Pressable
                                style={styles.myAccountButton}
                                onPress={() => alert("My Account")}
                            >
                                <Text style={{ color: "white", fontWeight: "bold" }}>
                                    MY ACCOUNT
                                </Text>
                            </Pressable>
                        </View>
                        {/* Greeting Text Section */}
                        <View style={styles.greetingTextSction}>
                            <Text
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: 20,
                                    marginTop: -15,
                                    marginBottom: 5,
                                }}
                            >
                                Hi Specsy!
                            </Text>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>
                                Sign in to use your saved prescription and track your orders.
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            {/* Scroll View */}
            <DrawerContentScrollView
                {...props}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                // style={{ flex: 2 }}
            >
                <View style={styles.drawerContent}>
                    {drawerItems.map((item, index) => {
                        return (
                            // Drawer Item Container
                            <Pressable
                                style={styles.drawerItemContainer}
                                key={index.toString()}
                                android_ripple={{
                                    color: "#d3d3d3",
                                }}
                            >
                                {/* Drawer Item Icon */}
                                <Image
                                    source={item.icon}
                                    style={styles.drawerItemIcon}
                                    resizeMode="contain"
                                />
                                <Text style={styles.drawerItemName}>{item.itemName}</Text>
                                {item.subItems && (
                                    <MaterialCommunityIcons
                                        name="chevron-down"
                                        size={20}
                                        color="black"
                                        style={{ alignSelf: "center" }}
                                    />
                                )}
                            </Pressable>
                        );
                    })}
                </View>
            </DrawerContentScrollView>
            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>CONTACT US</Text>
                <Text style={styles.footerText}>MORE</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: 62,
        height: 62,
        borderRadius: 31,
        overflow: "hidden",
        borderColor: "#0B66AB",
        borderWidth: 2,
    },
    avatarImage: {
        width: 62,
        height: 62,
    },
    avatarSection: {
        // backgroundColor: "green",
        flex: 1.3,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -10,
    },
    drawerContent: {
        marginTop: -30,
        backgroundColor: "white",
        // flex: 1,
    },
    drawerItemContainer: {
        flexDirection: "row",
        flex: 1,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 3,
    },
    drawerItemIcon: {
        width: 25,
        height: 23,
        tintColor: "#484848",
    },
    drawerItemName: {
        marginLeft: 25,
        flex: 1,
    },
    greetingTextSction: {
        flex: 2,
        // alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
    },
    header: {
        height: 199,
        width: "100%",
    },
    footer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#F5F9FA",
        width: "100%",
        height: 47,
        alignItems: "center",
        paddingLeft: 5,
    },
    footerText: {
        padding: 10,
        // fontSize: 15,
        fontWeight: "900",
    },
    image: {
        flex: 1,
        height: "100%",
    },
    myAccountButton: {
        width: 120,
        height: 30,
        borderRadius: 6,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: -45,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.15)",
        flexDirection: "row",
    },
});

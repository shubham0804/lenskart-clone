import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Pressable,
    LayoutAnimation,
} from "react-native";

import { DrawerContentScrollView } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { drawerItems } from "../data";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";

export default function DrawerContent(props) {
    const [drawerItemsData, setDrawerItemsData] = useState(drawerItems);

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...drawerItemsData];
        array.map((value, placeIndex) =>
            placeIndex === index
                ? (array[placeIndex]["isExpanded"] = !array[placeIndex]["isExpanded"])
                : (array[placeIndex]["isExpanded"] = false)
        );
        setDrawerItemsData(array);
    };

    const ExpandableComponent = ({ keyToUse, item, onClickFunction }) => {
        const [layoutHeight, setLayoutHeight] = useState(0);

        useEffect(() => {
            if (item.isExpanded) {
                setLayoutHeight(null);
            } else {
                setLayoutHeight(0);
            }
        }, [item.isExpanded]);

        return (
            <View key={keyToUse}>
                <Pressable
                    android_ripple={{
                        color: "#d3d3d3",
                    }}
                    style={
                        !item.isExpanded
                            ? styles.drawerItemContainer
                            : [
                                  styles.drawerItemContainer,
                                  {
                                      backgroundColor: "#F7F8FA",
                                      marginHorizontal: 0,
                                      marginBottom: 0,
                                  },
                              ]
                    }
                    onPress={onClickFunction}
                >
                    <Image source={item.icon} style={styles.drawerItemIcon} resizeMode="contain" />
                    <Text style={[styles.drawerItemName, { flex: 1 }]}>{item.itemName}</Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color="black"
                        style={{ alignSelf: "center" }}
                    />
                </Pressable>
                <View
                    style={{
                        height: layoutHeight,
                        overflow: "hidden",
                        backgroundColor: "#F7F8FA",
                    }}
                >
                    {item.subItems.map((item, key) => (
                        <Pressable
                            key={key}
                            style={styles.drawerItemContainer}
                            android_ripple={{
                                color: "#d3d3d3",
                            }}
                        >
                            <Text style={styles.text}>{item.name}</Text>
                            {/* Separator */}
                        </Pressable>
                    ))}
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
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
                                android_ripple={{
                                    color: "#d3d3d3",
                                }}
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
                                    fontSize: RFValue(20),
                                    paddingVertical: 5,
                                }}
                            >
                                Hi Specsy!
                            </Text>
                            <Text
                                style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: RFValue(14),
                                }}
                            >
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
            >
                <View style={styles.drawerContent}>
                    {drawerItemsData.map((item, index) => {
                        if (!item.subItems) {
                            return (
                                // Drawer Item Container
                                <Pressable
                                    style={styles.drawerItemContainer}
                                    key={index.toString()}
                                    android_ripple={{
                                        color: "#d3d3d3",
                                    }}
                                    onPress={() => {
                                        item.onPress &&
                                            item.onPress.type === "navigation" &&
                                            props.navigation.navigate(item.onPress.value);
                                    }}
                                >
                                    {/* Drawer Item Icon */}
                                    <Image
                                        source={item.icon}
                                        style={styles.drawerItemIcon}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.drawerItemName}>{item.itemName}</Text>
                                </Pressable>
                            );
                        } else {
                            return (
                                <ExpandableComponent
                                    keyToUse={item.itemName}
                                    key={item.itemName}
                                    item={item}
                                    onClickFunction={() => {
                                        updateLayout(index);
                                    }}
                                />
                            );
                        }
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
    avatarSection: {
        flex: 1.3,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: hp(1.5),
    },
    avatar: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        width: wp(17.5),
        height: wp(17.5),
        borderRadius: wp(13.75),
        overflow: "hidden",
        borderColor: "#0B66AB",
        borderWidth: 2,
    },
    avatarImage: {
        // width: 62,
        width: "100%",
        // height: 62,
        height: "100%",
    },

    drawerContent: {
        // marginTop: -30,
        marginTop: hp(-4),
        backgroundColor: "white",
        // backgroundColor: "red",
        // flex: 1,
    },
    drawerItemContainer: {
        flexDirection: "row",
        flex: 1,
        padding: wp(2.8),
        marginHorizontal: wp(2.8),
        marginVertical: 3,
    },
    drawerItemIcon: {
        width: wp(7),
        height: wp(6.4),
        tintColor: "#484848",
    },
    drawerItemName: {
        marginLeft: wp(7),
        flex: 1,
    },
    greetingTextSction: {
        flex: 2,
        justifyContent: "center",
        marginLeft: wp(3),
    },
    header: {
        aspectRatio: 1.75,
        height: undefined,
        width: "100%",
    },
    footer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#F5F9FA",
        width: "100%",
        height: hp(6.5),
        alignItems: "center",
        paddingLeft: wp(1.5),
    },
    footerText: {
        padding: wp(2.8),
        fontWeight: "900",
    },
    image: {
        flex: 1,
        height: "100%",
    },
    myAccountButton: {
        width: wp(31),
        height: hp(4.3),
        borderRadius: wp(1.7),
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp(2),
        marginBottom: hp(-6),
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.15)",
        flexDirection: "row",
    },
    content: {
        paddingLeft: wp(2.8),
        paddingRight: wp(2.8),
        backgroundColor: "#fff",
    },
    text: {
        marginLeft: wp(14),
    },
});

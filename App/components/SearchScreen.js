import React from "react";
import { StyleSheet, Text, View, FlatList, Image, Pressable } from "react-native";
import Ripple from "react-native-material-ripple";
import { COLORS } from "../constants/theme";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import RippleImage from "./RippleImage";
import { RFValue } from "react-native-responsive-fontsize";

const TypeLink = (element, key) => {
    const renderData = ({ item }) => {
        return (
            <Ripple
                rippleDuration={250}
                rippleOpacity={0.5}
                rippleFades={false}
                rippleColor="rgba(44,44,44,0.3)"
            >
                <View style={styles.linkDataContainer}>
                    {/* Item Initial Logo */}
                    <View style={styles.itemLogoContainer}>
                        <Text style={styles.itemLogoText}>{item.title.substr(0, 1)}</Text>
                    </View>
                    {/* Item Name */}
                    <Text style={{ marginLeft: 10, alignSelf: "center" }}>{item.title}</Text>
                </View>
            </Ripple>
        );
    };

    return (
        <View key={key.toString()} style={styles.linkContainer}>
            {/* Title */}
            <View>
                <Text style={styles.linkTitle}>{element.name}</Text>
            </View>
            {/* Data */}
            <View style={{ marginTop: 5 }}>
                <FlatList
                    data={element.data}
                    renderItem={renderData}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

const TypeProducts = (element, key) => {
    const renderData = ({ item }) => {
        if (!item.viewAll) {
            return (
                <Ripple
                    style={styles.productItemContainer}
                    rippleDuration={250}
                    rippleOpacity={0.5}
                    rippleFades={false}
                    rippleColor="rgba(19, 199, 190, 0.2)"
                >
                    {/* Image */}
                    <Image source={{ uri: item.image_url }} style={styles.productImage} />
                    {/* Brand Name */}
                    <Text>{item.brand_name}</Text>
                    {/* Price */}
                    <Text style={styles.productPrice}>₹{item.prices[0].price}</Text>
                </Ripple>
            );
        } else {
            return (
                <View
                    style={{
                        alignSelf: "center",
                        marginHorizontal: 25,
                        alignItems: "center",
                    }}
                >
                    <View style={styles.viewAllIcon}>
                        <AntDesign name="appstore1" size={18} color="#888888" />
                    </View>
                    <Text>View All</Text>
                </View>
            );
        }
    };

    return (
        <View key={key} style={styles.linkContainer}>
            {/* Title */}
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={[styles.linkTitle, { flex: 1 }]}>{element.name}</Text>
                <Pressable
                    android_ripple={{
                        rippleColor: "black",
                        radius: 50,
                    }}
                >
                    <Text style={styles.viewAllText}>VIEW ALL</Text>
                </Pressable>
            </View>
            {/* Data */}
            <View style={{ marginTop: 5 }}>
                <FlatList
                    data={[...element.data, { viewAll: true }]}
                    renderItem={renderData}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    style={{ overflow: "visible" }}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

const TypeBannerGrid = (element, key) => {
    const renderItem = ({ item, index }) => {
        return (
            <RippleImage
                imageSource={{ uri: item.imageUrl }}
                imageStyle={styles.bannerImage}
                rippleStyle={styles.bannerTouchable}
                rippleColor="rgba(44,44,44,0.3)"
            />
        );
    };

    return (
        <FlatList
            data={element}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={{ marginHorizontal: 10 }}
            key={key}
        />
    );
};

export { TypeLink, TypeProducts, TypeBannerGrid };

const styles = StyleSheet.create({
    linkContainer: {
        backgroundColor: "white",
        borderRadius: wp(3),
        marginHorizontal: wp(3),
        paddingHorizontal: wp(4),
        paddingVertical: wp(3),
        elevation: 1,
    },
    linkTitle: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#414342",
    },
    linkDataContainer: {
        flexDirection: "row",
        marginVertical: 8,
    },
    itemLogoContainer: {
        width: wp(11),
        height: wp(11),
        borderRadius: wp(5.5),
        backgroundColor: "#888888",
        justifyContent: "center",
    },
    itemLogoText: {
        color: "white",
        alignSelf: "center",
        fontSize: RFValue(18),
    },
    viewAllText: {
        color: COLORS.secondary,
        fontWeight: "bold",
    },
    productItemContainer: {
        margin: wp(1.5),
        backgroundColor: "white",
        padding: wp(1.5),
        borderRadius: wp(3),
        elevation: 1,
    },
    productImage: {
        flex: 1,
        aspectRatio: 1.4,
        width: "100%",
        height: hp(16),
        resizeMode: "contain",
    },
    productPrice: {
        color: COLORS.secondary,
    },
    viewAllIcon: {
        height: wp(11),
        width: wp(11),
        borderRadius: wp(5.5),
        backgroundColor: "#eeeeee",
        marginBottom: wp(2),
        justifyContent: "center",
        alignItems: "center",
    },
    bannerTouchable: {
        flex: 1,
        marginBottom: wp(3),
        marginRight: wp(1.5),
        elevation: wp(1.5),
    },
    bannerImage: {
        aspectRatio: 0.85,
        height: undefined,
        width: "100%",
        flex: 1,
        resizeMode: "cover",
        borderRadius: wp(3),
    },
});

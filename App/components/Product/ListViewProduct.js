import React, { useState } from "react";
import { StyleSheet, Text, View, useWindowDimensions, Pressable, Image } from "react-native";
import { COLORS, screen } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListView = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const { price: marketPrice } = product.prices.find((price) => price.name === "Market Price");
    const { price: lenskartPrice } = product.prices.find(
        (price) => price.name === "Lenskart Price"
    );
    return (
        <View style={styles.container}>
            {/* Brought & Wishlist Count */}
            <View style={styles.boughtWishlistContainer}>
                {!!product.purchaseCount && (
                    <>
                        {/* Brought */}
                        <View style={styles.boughtContainer}>
                            <MaterialCommunityIcons
                                name="fire"
                                size={25}
                                color={COLORS.vermilion}
                            />
                            <Text style={{ color: COLORS.vermilion }}>
                                {product.purchaseCount} bought
                            </Text>
                        </View>
                    </>
                )}
                {/* Wishlist */}
                <Pressable onPress={() => setIsWishlisted(!isWishlisted)}>
                    {!isWishlisted && (
                        <MaterialCommunityIcons
                            name="heart-outline"
                            size={20}
                            color="black"
                            style={{ marginRight: 3 }}
                        />
                    )}
                    {isWishlisted && (
                        <MaterialCommunityIcons
                            name="heart"
                            size={20}
                            color={COLORS.brightVermilion}
                            style={{ marginRight: 3 }}
                        />
                    )}
                </Pressable>
                {!!product.wishlistCount && (
                    <Text>{!isWishlisted ? product.wishlistCount : product.wishlistCount + 1}</Text>
                )}
            </View>

            {/* Image */}
            <Image source={{ uri: product.imageUrl }} style={styles.image} />

            <View
                style={{
                    flexDirection: "row",
                    marginHorizontal: 6,
                    marginVertical: 20,
                }}
            >
                {/* Name & Price */}
                <View style={styles.namePriceContainer}>
                    {/* Name */}
                    <Text style={{ fontSize: 14 }}>{product.brandName}</Text>
                    {/* Price */}
                    <View style={styles.priceContainer}>
                        <Text style={{ color: COLORS.secondary, fontSize: 15 }}>
                            ₹{lenskartPrice}
                        </Text>
                        <Text style={styles.marketPriceText}> ₹{marketPrice}</Text>
                    </View>
                </View>
                {/* Star Rating */}
                <View style={styles.starRatingContainer}>
                    <Text style={{ color: "white" }}>{product.review.rating}</Text>
                    <MaterialCommunityIcons
                        name="star"
                        size={13}
                        color="white"
                        style={{ marginLeft: 2 }}
                    />
                </View>
                {/* Try On Image */}
                <View style={styles.tryOnContainer}>
                    <Text style={{ color: "white", marginRight: 25, fontWeight: "900" }}>
                        TRY ON
                    </Text>
                    <Image
                        source={require("../../assets/images/try-on-button.png")}
                        style={styles.tryOnImage}
                    />
                </View>
            </View>
            <View style={styles.frameTextContainer}>
                {/* Frame Width */}
                <Text style={{ fontWeight: "bold", color: COLORS.darkerGrey }}>
                    Frame Width: {product.width}
                </Text>
                {/* Frame Size */}
                <Text style={{ color: COLORS.darkGrey }}>Frame Size: {product.frameSize}</Text>
            </View>
        </View>
    );
};

export default ListView;

const styles = StyleSheet.create({
    boughtContainer: {
        marginHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    boughtWishlistContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        marginHorizontal: 15,
        marginVertical: 8,
    },
    container: {
        backgroundColor: "white",
        width: "95%",
        alignSelf: "center",
        // height: screen.height * 0.4,
        height: 340,
        marginVertical: 4,
        elevation: 1,
    },
    frameTextContainer: {
        flex: 1,
        // backgroundColor: "teal",
        marginHorizontal: 15,
        marginTop: -15,
        // justifyContent: "flex-start",
        // alignItems: "flex-start",
        // marginVertical: 15,
    },
    image: {
        width: "100%",
        aspectRatio: 2.1 / 1,
    },
    marketPriceText: {
        color: COLORS.darkGrey,
        // marginLeft: 5,
        marginTop: 1,
        textDecorationLine: "line-through",
    },
    namePriceContainer: {
        flexDirection: "column",
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    starRatingContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 45,
        height: 22,
        marginVertical: 10,
        marginHorizontal: 3,
        borderRadius: 3,
        backgroundColor: COLORS.secondary,
    },
    tryOnContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 120,
        height: 30,
        borderRadius: 3,
        marginHorizontal: 3,
        // paddingHorizontal: 5,
        marginVertical: 10,
        backgroundColor: COLORS.secondary,
    },
    tryOnImage: {
        flex: 1,
        height: 40,
        width: null,
        aspectRatio: 1,
        resizeMode: "contain",
        // backgroundColor: "teal",
        // alignSelf: "flex-end",
        position: "absolute",
        right: 2,
        bottom: 0,
    },
});

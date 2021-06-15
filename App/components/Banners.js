import React from "react";
import { StyleSheet, View } from "react-native";
import RippleImage from "./RippleImage";

const LockdownNotice = () => (
    <RippleImage
        rippleColor="rgba(44,44,44,0.3)"
        rippleStyle={styles.lockdownImagePressable}
        imageSource={require("../assets/images/lockdown-service.png")}
        imageStyle={styles.lockdownImage}
    />
);

const Generic = () => (
    <View style={{ flex: 1 }}>
        {/* Lenskart Blu Banner */}
        <View style={{ marginBottom: 5, marginTop: 10 }}>
            <RippleImage
                rippleColor="rgba(44,44,44,0.3)"
                rippleStyle={styles.lBlueTouchable}
                imageSource={require("../assets/images/banners/blue-shield.png")}
                imageStyle={styles.lBlueImage}
            />
        </View>
        {/* Share Location Banner */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.shareLocationTouchable}
            imageSource={require("../assets/images/banners/share-location.png")}
            imageStyle={styles.shareLocationImage}
        />
        {/* Home Try */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.homeTryPressable}
            imageSource={require("../assets/images/banners/home-try.jpg")}
            imageStyle={styles.homeTryImage}
        />
        {/* Buy on Whatsapp */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.5)"
            rippleStyle={styles.whatsappTouchable}
            imageSource={require("../assets/images/banners/buy-on-whatsapp.jpg")}
            imageStyle={styles.whatsappImage}
        />
        {/* Call 1800 */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.call1800Pressable}
            imageSource={require("../assets/images/banners/call-1800.jpg")}
            imageStyle={styles.call1800Image}
        />
        {/* Buy Online */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.buyOnlinePressable}
            imageSource={require("../assets/images/banners/buy-online.gif")}
            imageStyle={styles.buyOnlineImage}
        />
        {/* Wear Blu */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.buyOnlinePressable}
            imageSource={require("../assets/images/banners/wear-blu.jpg")}
            imageStyle={styles.buyOnlineImage}
        />
        {/* Air Flex Gif */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.buyOnlinePressable}
            imageSource={require("../assets/images/banners/air-flex-2.gif")}
            imageStyle={styles.buyOnlineImage}
        />
        {/* Best Selling Sunglasses */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.buyOnlinePressable}
            imageSource={require("../assets/images/banners/best-selling.jpg")}
            imageStyle={styles.buyOnlineImage}
        />
        {/* Prescription Glasses */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.buyOnlinePressable}
            imageSource={require("../assets/images/banners/prescription-glasses.png")}
            imageStyle={styles.buyOnlineImage}
        />
        {/* Spectacular */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.buyOnlinePressable}
            imageSource={require("../assets/images/banners/spectacular.gif")}
            imageStyle={styles.buyOnlineImage}
        />
    </View>
);

const LenskartAssurance = () => (
    <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={{ marginRight: 10 }}
            imageSource={require("../assets/images/banners/made-by-robots.jpg")}
            imageStyle={styles.bannerGrid}
        />
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/made-with-precision.jpg")}
            imageStyle={styles.bannerGrid}
        />
    </View>
);

const styles = StyleSheet.create({
    homeTryPressable: {
        width: "95%",
        height: 85,
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginTop: 5,
    },
    homeTryImage: {
        flex: 1,
        resizeMode: "contain",
        width: "100%",
        borderRadius: 5,
    },
    lockdownImagePressable: {
        width: "98%",
        marginLeft: 10,
        marginTop: 5,
        marginBottom: -5,
        flex: 1,
    },
    lockdownImage: {
        height: 85,
        width: "100%",
        flex: 1,
        borderRadius: 9,
        alignSelf: "center",
    },
    lBlueTouchable: {
        height: 205,
        width: "95%",
        marginLeft: 10,
    },
    lBlueImage: {
        flex: 1,
        width: "100%",
        borderRadius: 5,
        resizeMode: "contain",
    },
    whatsappTouchable: {
        width: "95%",
        marginLeft: 10,
        marginTop: 5,
        height: 85,
        justifyContent: "center",
    },
    whatsappImage: {
        flex: 1,
        resizeMode: "contain",
        width: "100%",
        borderRadius: 5,
    },
    shareLocationTouchable: {
        // marginTop: 10,
        backgroundColor: "white",
        width: "95%",
        alignSelf: "center",
        borderRadius: 5,
        height: 110,
        alignItems: "center",
    },
    shareLocationImage: {
        marginTop: -25,
        resizeMode: "contain",
        aspectRatio: 1.95,
        // alignSelf: "center",
        borderRadius: 2,
    },
    call1800Pressable: {
        alignItems: "center",
        height: 205,
        justifyContent: "center",
        marginTop: 5,
        width: "95%",
        marginLeft: 10,
    },
    call1800Image: {
        flex: 1,
        resizeMode: "contain",
        width: "100%",
        borderRadius: 5,
    },

    buyOnlinePressable: {
        width: "95%",
        height: 205,
        justifyContent: "center",
        marginLeft: 10,
        marginVertical: 5,
    },
    buyOnlineImage: {
        resizeMode: "contain",
        width: "100%",
        flex: 1,
        // height: null,
        height: 205,
        borderRadius: 5,
    },
    bannerGrid: {
        width: 165,
        height: 200,
        borderRadius: 5,
    },
});

export { LockdownNotice, Generic, LenskartAssurance };

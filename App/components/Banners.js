import React from "react";
import { StyleSheet, View, useWindowDimensions, Text } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RippleImage from "./RippleImage";
import * as Linking from "expo-linking";

const ExtraWideBanner = ({ data, keyId }) => {
    return (
        <RippleImage
            keyId={keyId}
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={[styles.extraWideTouchable, { width: wp(95), marginVertical: 3 }]}
            imageSource={{ uri: data.imageUrl }}
            imageStyle={styles.extraWideImage}
            // onPress={() =>
            //     Linking.openURL(
            //         "whatsapp://send/?phone=918929853854&text=Hi Lenskart, I want to buy glasses!"
            //     )
            // }
        />
    );
};

const WideBanner = ({ data, keyId }) => {
    return (
        <RippleImage
            keyId={keyId}
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={{ uri: data.imageUrl }}
            rippleStyle={styles.normalTouchable}
            imageStyle={styles.normalImage}
        />
    );
};

const NormalBanner = ({ data, keyId }) => {
    return (
        <RippleImage
            keyId={keyId}
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={{ uri: data.imageUrl }}
            rippleStyle={styles.normalTouchable}
            imageStyle={styles.normalImage}
            // onPress={() => {
            //     navigation.navigate("VideoScreen", {
            //         title: "How to Buy Glasses Online",
            //         url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Eyewear%20Online%20Shopping%20Guide.mp4",
            //     });
            // }}
        />
    );
};

export const BannerGrid = ({ data, navigation }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                // backgroundColor: "blue",
                marginHorizontal: 5,
            }}
        >
            <RippleImage
                rippleColor="rgba(44,44,44,0.3)"
                imageSource={{ uri: data[0].imageUrl }}
                // imageSource={require("../assets/images/banners/made-by-robots.jpg")}
                // rippleStyle={{ marginRight: 10 }}
                // rippleStyle={[styles.portraitTouchable, { marginRight: 5 }]}
                rippleStyle={[styles.portraitTouchable]}
                imageStyle={styles.portraitImage}
                onPress={() =>
                    navigation.navigate("VideoScreen", {
                        title: "",
                        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/made-by-robots.mp4",
                    })
                }
            />
            <RippleImage
                rippleColor="rgba(44,44,44,0.3)"
                imageSource={{ uri: data[1].imageUrl }}
                // imageSource={require("../assets/images/banners/made-with-precision.jpg")}
                rippleStyle={styles.portraitTouchable}
                imageStyle={styles.portraitImage}
                onPress={() =>
                    navigation.navigate("VideoScreen", {
                        title: "",
                        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/made-with-precision.mp4",
                    })
                }
            />
        </View>
    );
};

const StoreLocator = ({ data, keyId }) => {
    const imageUrl = data.placeHolderImageUrl;
    return (
        // <React.Fragment key={keyId}>
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.shareLocationTouchable}
            imageSource={{ uri: imageUrl }}
            imageStyle={styles.shareLocationImage}
            keyId={keyId}
        />
        // </React.Fragment>
    );
};

const Banner = ({ data, keyId }) => {
    // console.log(data);
    // return <Text>Banner</Text>;
    switch (data.aspectRatio) {
        case "EXTRA_WIDE":
            return <ExtraWideBanner data={data} keyId={keyId} />;
        case "WIDE":
            return <WideBanner data={data} keyId={keyId} />;
        case "NORMAL":
            return <NormalBanner data={data} keyId={keyId} />;
        default:
            return <Text key={keyId.toString()}>Unknown Banner Sizes</Text>;
    }
};

const LockdownNotice = () => {
    var width = useWindowDimensions().width;
    return (
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={[styles.extraWideTouchable, { width: wp(95) }]}
            imageSource={require("../assets/images/lockdown-service.png")}
            imageStyle={styles.extraWideImage}
            onPress={() =>
                Linking.openURL(
                    "whatsapp://send/?phone=918929853854&text=Hi Lenskart, I want to buy glasses!"
                )
            }
        />
    );
};

const Generic = ({ navigation }) => (
    <View style={{ flex: 1 }}>
        {/* Lenskart Blu Banner */}
        <View style={{ marginBottom: 7, marginTop: 7 }}>
            <RippleImage
                rippleColor="rgba(44,44,44,0.3)"
                rippleStyle={styles.normalTouchable}
                imageSource={require("../assets/images/banners/blue-shield.png")}
                imageStyle={styles.normalImage}
                onPress={() => {
                    navigation.navigate("VideoScreen", {
                        title: "Forever BLU",
                        url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Lenskart%20BLU%20_%20Blue%20Block%20Lenses%20that%20Protect%20Your%20Eyes.mp4",
                    });
                }}
            />
        </View>
        {/* Store Locator Banner */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            rippleStyle={styles.shareLocationTouchable}
            imageSource={require("../assets/images/banners/share-location.png")}
            imageStyle={styles.shareLocationImage}
        />
        {/* Home Try */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/home-try.jpg")}
            rippleStyle={styles.extraWideTouchable}
            imageStyle={styles.extraWideImage}
            onPress={() => Linking.openURL("tel://18001026886")}
        />
        {/* Buy on Whatsapp */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.5)"
            imageSource={require("../assets/images/banners/buy-on-whatsapp.jpg")}
            rippleStyle={styles.extraWideTouchable}
            imageStyle={styles.extraWideImage}
            onPress={() =>
                Linking.openURL(
                    "whatsapp://send/?phone=918929853854&text=Hi Lenskart, I want to buy glasses!"
                )
            }
        />
        {/* Call 1800 */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/call-1800.jpg")}
            rippleStyle={styles.normalTouchable}
            imageStyle={styles.normalImage}
            onPress={() => Linking.openURL("tel://1800111111")}
        />
        {/* Buy Online */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/buy-online.gif")}
            rippleStyle={styles.normalTouchable}
            imageStyle={styles.normalImage}
            onPress={() => {
                navigation.navigate("VideoScreen", {
                    title: "How to Buy Glasses Online",
                    url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Eyewear%20Online%20Shopping%20Guide.mp4",
                });
            }}
        />
        {/* Wear Blu */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/wear-blu.jpg")}
            // rippleStyle={styles.buyOnlinePressable}
            // imageStyle={styles.buyOnlineImage}
            rippleStyle={styles.normalTouchable}
            imageStyle={styles.normalImage}
        />
        {/* Air Flex Gif */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/air-flex-2.gif")}
            rippleStyle={styles.normalTouchable}
            imageStyle={styles.normalImage}
        />
        {/* Best Selling Sunglasses */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/best-selling.jpg")}
            rippleStyle={styles.normalTouchable}
            imageStyle={styles.normalImage}
        />
        {/* Prescription Glasses */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/prescription-glasses.png")}
            rippleStyle={styles.normalTouchable}
            imageStyle={styles.normalImage}
            onPress={() =>
                navigation.navigate("VideoScreen", {
                    title: "",
                    url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/Everything%20You%20Need%20To%20Know%20About%20Prescription%20Eyeglasses.mp4",
                })
            }
        />
        {/* Spectacular */}
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/spectacular.gif")}
            rippleStyle={styles.normalTouchable}
            imageStyle={styles.normalImage}
        />
    </View>
);

const LenskartAssurance = ({ navigation }) => (
    <View
        style={{
            flexDirection: "row",
            // backgroundColor: "blue",
            marginHorizontal: 5,
        }}
    >
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/made-by-robots.jpg")}
            // rippleStyle={{ marginRight: 10 }}
            // rippleStyle={[styles.portraitTouchable, { marginRight: 5 }]}
            rippleStyle={[styles.portraitTouchable]}
            imageStyle={styles.portraitImage}
            onPress={() =>
                navigation.navigate("VideoScreen", {
                    title: "",
                    url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/made-by-robots.mp4",
                })
            }
        />
        <RippleImage
            rippleColor="rgba(44,44,44,0.3)"
            imageSource={require("../assets/images/banners/made-with-precision.jpg")}
            rippleStyle={styles.portraitTouchable}
            imageStyle={styles.portraitImage}
            onPress={() =>
                navigation.navigate("VideoScreen", {
                    title: "",
                    url: "https://storage.googleapis.com/lenskart-rn-ui/Videos/made-with-precision.mp4",
                })
            }
        />
    </View>
);

const styles = StyleSheet.create({
    extraWideTouchable: {
        width: wp(95),
        // height: hp(12),
        alignSelf: "center",
        // backgroundColor: "red",
        marginTop: hp(1),
        flex: 1,
    },
    extraWideImage: {
        aspectRatio: 4 / 1,
        resizeMode: "cover",
        // resizeMode: "contain",
        height: undefined,
        width: "100%",
        flex: 1,
        borderRadius: wp(2),
        alignSelf: "center",
    },
    normalTouchable: {
        width: wp(95),
        alignSelf: "center",
        // justifyContent: "center",
        flex: 1,
        marginVertical: 4,
    },
    normalImage: {
        flex: 1,
        aspectRatio: 1.675,
        // height: "100%",
        height: undefined,
        width: "100%",
        borderRadius: 5,
    },
    shareLocationTouchable: {
        // marginTop: 10,
        backgroundColor: "white",
        width: wp(95),
        alignSelf: "center",
        borderRadius: 5,
        // height: 110,
        // alignItems: "center",
    },
    shareLocationImage: {
        // marginTop: -25,
        resizeMode: "contain",
        aspectRatio: 4,
        // alignSelf: "center",
        borderRadius: 5,
        height: undefined,
        width: "100%",
    },
    portraitTouchable: {
        // backgroundColor: "green",
        flex: 1,
        alignItems: "center",
    },
    portraitImage: {
        // backgroundColor: "red",
        flex: 1,
        aspectRatio: 0.83,
        // aspectRatio: 0.78,
        width: wp(47),
        // width: "95%",
        // width: 165,
        height: undefined,
        // height: "100%",
        // height: 200,
        borderRadius: 5,
        resizeMode: "contain",
    },
});

export { LockdownNotice, Generic, LenskartAssurance, Banner, StoreLocator };

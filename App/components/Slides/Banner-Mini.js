import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import * as Linking from "expo-linking";
import RippleImage from "../RippleImage";
import { iconSlideData } from "../../data";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../constants/theme";

export default BannerMini = ({ data }) => {
    return (
        <View style={{ flex: 1, marginBottom: 10 }}>
            <View
                style={{
                    width: "100%",
                    height: hp(8),
                    backgroundColor: COLORS.primary,
                    // paddingHorizontal: 10,
                    // position: "absolute",
                    // right: 0,
                }}
            />

            <View
                style={{
                    // backgroundColor: "red",
                    position: "absolute",
                    marginTop: 10,
                    // top: hp(-2),
                    // backgroundColor: "red",
                    // paddingBottom: 20,
                }}
            >
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    overScrollMode="never"
                    contentContainerStyle={{
                        // backgroundColor: "green",
                        // height: 120,
                        alignItems: "center",
                        marginHorizontal: 7,
                        // marginTop: -80,
                        // marginBottom: 50,
                        // zIndex: 180,
                    }}
                >
                    {data.map(({ id, imageUrl }) => {
                        return (
                            // <View key={id}>
                            <RippleImage
                                rippleColor="rgba(44,44,44,0.3)"
                                rippleStyle={styles.iconSlidePressable}
                                imageSource={{ uri: imageUrl }}
                                imageStyle={[styles.iconSlideImage]}
                                key={id.toString()}
                                // onPress={() => {
                                //     onPress &&
                                //         onPress.type === "link" &&
                                //         Linking.openURL(onPress.value);
                                // }}
                            />
                            // </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iconSlidePressable: {
        // backgroundColor: "red",
        width: wp(27),
        // width: 100,
        height: hp(8),
        // height: 50,
        marginRight: wp(1.9),
        // marginTop: wp(15),
        // marginTop: 70,
        // marginTop: wp(0.8),
        alignItems: "center",
        justifyContent: "center",
    },
    iconSlideImage: {
        // backgroundColor: "green",
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: wp(1),
    },
});

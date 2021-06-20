import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import * as Linking from "expo-linking";
import RippleImage from "../RippleImage";
import { iconSlideData } from "../../data";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default IconSlide = () => (
    <View style={{ marginTop: hp(-14), flex: 1 }}>
        {/* <View style={{ marginTop: -50 }}> */}
        <ScrollView
            horizontal={true}
            contentContainerStyle={{ marginHorizontal: hp(1) }}
            showsHorizontalScrollIndicator={false}
            overScrollMode="never"
        >
            {iconSlideData.map(({ id, icon, onPress }) => {
                return (
                    <View key={id}>
                        {/* <View style={{ marginHorizontal: hp(0.4) }} key={id}> */}
                        <RippleImage
                            rippleColor="rgba(44,44,44,0.3)"
                            rippleStyle={styles.iconSlidePressable}
                            imageSource={icon}
                            imageStyle={styles.iconSlideImage}
                            onPress={() => {
                                onPress &&
                                    onPress.type === "link" &&
                                    Linking.openURL(onPress.value);
                            }}
                        />
                    </View>
                );
            })}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    iconSlidePressable: {
        // backgroundColor: "red",
        width: wp(27),
        // width: 100,
        height: hp(8),
        // height: 50,
        marginRight: wp(1.9),
        marginTop: wp(15),
        // marginTop: 70,
        // marginTop: wp(0.8),
        alignItems: "center",
        justifyContent: "center",
    },
    iconSlideImage: {
        // backgroundColor: "green",
        width: "100%",
        // width: 105,
        height: "100%",
        resizeMode: "contain",
        borderRadius: wp(1),
    },
});

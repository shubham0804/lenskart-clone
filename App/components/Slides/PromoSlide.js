import React, { useState } from "react";
import { StyleSheet, View, useWindowDimensions, ScrollView, Image } from "react-native";
import { promoSlideData } from "../../data";
import RippleImage from "../RippleImage";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default PromoSlide = () => {
    const width = useWindowDimensions().width;
    const height = width * 0.6;
    // console.log(width);
    // console.log(height);

    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide);
        }
    };

    return (
        <View style={{ marginBottom: -15 }}>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}
                disableIntervalMomentum={true}
                snapToInterval={wp(93.7)}
                // snapToInterval={wp(93.7)}
                // snapToInterval={337}
                // decelerationRate="normal"
                decelerationRate={0.8}
                overScrollMode="never"
            >
                {promoSlideData.map((image, index) => {
                    if (index <= 3) {
                        return (
                            <View key={index}>
                                <RippleImage
                                    rippleColor="rgba(44,44,44,0.3)"
                                    rippleStyle={[styles.promoSlidePressable, { height: height }]}
                                    imageSource={image}
                                    imageStyle={styles.promoSlideImage}
                                />
                            </View>
                        );
                    } else {
                        return (
                            <View key={index}>
                                <RippleImage
                                    rippleColor="rgba(44,44,44,0.3)"
                                    rippleStyle={[styles.promoSlidePressable, { marginRight: 20 }]}
                                    imageSource={image}
                                    imageStyle={styles.promoSlideImage}
                                />
                            </View>
                        );
                    }
                })}
            </ScrollView>
            <View style={styles.pagination}>
                {promoSlideData.map((image, id) => {
                    return (
                        <Image
                            source={require("../../assets/images/sliders/indicator-dot.png")}
                            key={id}
                            style={id == active ? styles.activeDot : styles.dot}
                        />
                    );
                })}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pagination: {
        flexDirection: "row",
        position: "absolute",
        bottom: hp(2),
        alignSelf: "center",
    },
    dot: {
        tintColor: "#688082",
        marginHorizontal: 3,
        width: 7,
        height: 7,
    },
    activeDot: {
        tintColor: "#12C6BE",
        marginHorizontal: 3,
        width: 7,
        height: 7,
    },
    promoSlidePressable: {
        flex: 1,
        // width: wp(92),
        // height: 193,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: -10,
        // marginBottom: 10,
        marginLeft: 5,
    },
    promoSlideImage: {
        flex: 1,
        width: "100%",
        height: undefined,
        aspectRatio: 1.54,
        // aspectRatio: 1.5,
        resizeMode: "contain",
        // borderRadius: 5,
        overflow: "hidden",
        // marginHorizontal: 5,
        // paddingHorizontal: 10,
    },
});

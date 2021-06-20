import React, { useState } from "react";
import { StyleSheet, View, ScrollView, useWindowDimensions, Image } from "react-native";
import { customerReviewSlideData } from "../../data";
import RippleImage from "../RippleImage";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default CustomerReviewSlide = ({ navigation }) => {
    const width = useWindowDimensions().width;
    const height = width * 0.6;

    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide);
        }
    };

    return (
        <View>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}
                disableIntervalMomentum={true}
                snapToInterval={wp(93.2)}
                snapToInterval={wp(94.8)}
                decelerationRate={0.7}
                overScrollMode="never"
                contentContainerStyle={{ marginHorizontal: 3 }}
            >
                {customerReviewSlideData.map(({ image, url }, index) => {
                    if (index <= 5) {
                        return (
                            <View key={index}>
                                <RippleImage
                                    rippleColor="rgba(44,44,44,0.3)"
                                    rippleStyle={styles.customerReviewPressable}
                                    imageSource={image}
                                    imageStyle={styles.customerReviewImage}
                                    onPress={() => {
                                        navigation.navigate("VideoScreen", {
                                            title: "",
                                            url: url,
                                        });
                                    }}
                                />
                            </View>
                        );
                    } else {
                        return (
                            <View key={index}>
                                <RippleImage
                                    rippleColor="rgba(44,44,44,0.3)"
                                    rippleStyle={[
                                        styles.customerReviewPressable,
                                        { marginRight: 23 },
                                    ]}
                                    imageSource={image}
                                    imageStyle={styles.customerReviewImage}
                                />
                            </View>
                        );
                    }
                })}
            </ScrollView>
            <View style={styles.pagination}>
                {customerReviewSlideData.map((image, id) => {
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
    customerReviewPressable: {
        // backgroundColor: "red",
        flex: 1,
        // height: 200,
        marginHorizontal: wp(1),
        marginVertical: 5,
        // marginHorizontal: 5,
        // width: 330,
    },
    customerReviewImage: {
        // backgroundColor: "green",
        flex: 1,
        aspectRatio: 1.52,
        aspectRatio: 1.62,
        width: "100%",
        height: undefined,
        // height: "100%",
        resizeMode: "cover",
        // resizeMode: "contain",
        // overflow: "hidden",
    },
    pagination: {
        flexDirection: "row",
        position: "absolute",
        bottom: hp(3),
        alignSelf: "center",
    },
    dot: {
        tintColor: "#688082",
        marginHorizontal: wp(0.7),
        width: wp(2),
        height: wp(2),
    },
    activeDot: {
        tintColor: "#12C6BE",
        marginHorizontal: wp(0.7),
        width: wp(2),
        height: wp(2),
    },
});

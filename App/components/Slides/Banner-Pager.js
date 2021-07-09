import React, { useState } from "react";
import { StyleSheet, View, ScrollView, useWindowDimensions, Image } from "react-native";
import RippleImage from "../RippleImage";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { aspectRatio } from "../../constants/theme";

export default BannerPager = ({ navigation, data, keyId }) => {
    const width = useWindowDimensions().width;
    const height = width * 0.6;

    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide);
        }
    };

    // return <Text>Testing 123</Text>;

    return (
        <View key={keyId} style={{ marginVertical: 2 }}>
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
                {data.map(({ imageUrl }, index) => {
                    if (index <= 5) {
                        return (
                            <View key={index}>
                                <RippleImage
                                    rippleColor="rgba(44,44,44,0.3)"
                                    rippleStyle={
                                        data.length > 1
                                            ? styles.customerReviewPressable
                                            : [
                                                  styles.customerReviewPressable,
                                                  { marginHorizontal: 5 },
                                              ]
                                    }
                                    imageSource={{ uri: imageUrl }}
                                    imageStyle={styles.customerReviewImage}
                                    // onPress={() => {
                                    //     navigation.navigate("VideoScreen", {
                                    //         title: "",
                                    //         url: url,
                                    //     });
                                    // }}
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
                                    imageSource={{ uri: imageUrl }}
                                    imageStyle={styles.customerReviewImage}
                                />
                            </View>
                        );
                    }
                })}
            </ScrollView>
            <View style={styles.pagination}>
                {data.map((image, id) => {
                    if (data.length > 1) {
                        return (
                            <Image
                                source={require("../../assets/images/sliders/indicator-dot.png")}
                                key={id}
                                style={id == active ? styles.activeDot : styles.dot}
                            />
                        );
                    }
                })}
            </View>
        </View>
    );
};

export const SingleBannerPager = ({ imageUrl }) => {
    return (
        <View style={styles.singleBannerContainer}>
            <Image source={{ uri: imageUrl }} style={styles.singleBannerImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    customerReviewPressable: {
        // backgroundColor: "red",
        flex: 1,
        marginHorizontal: wp(1),
        marginVertical: 5,
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
    singleBannerContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 3,
    },
    singleBannerImage: {
        width: "95%",
        borderRadius: 5,
        aspectRatio: aspectRatio.EXTRA_WIDE,
    },
});

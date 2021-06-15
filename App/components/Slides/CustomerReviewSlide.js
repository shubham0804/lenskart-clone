import React, { useState } from "react";
import { StyleSheet, View, ScrollView, useWindowDimensions, Image } from "react-native";
import { customerReviewSlideData } from "../../data";
import RippleImage from "../RippleImage";

export default CustomerReviewSlide = () => {
    const width = useWindowDimensions().width;
    const height = width * 0.6;

    console.log(`Width: ${width}`);
    console.log(`height: ${height}`);

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
                snapToInterval={340}
                decelerationRate={0.7}
                overScrollMode="never"
                contentContainerStyle={{ marginHorizontal: 3 }}
            >
                {customerReviewSlideData.map((image, index) => {
                    if (index <= 5) {
                        return (
                            <View key={index}>
                                <RippleImage
                                    rippleColor="rgba(44,44,44,0.3)"
                                    rippleStyle={styles.customerReviewPressable}
                                    imageSource={image}
                                    imageStyle={styles.customerReviewImage}
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
                                        { marginRight: 25 },
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
        height: 200,
        marginHorizontal: 5,
        width: 330,
    },
    customerReviewImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        overflow: "hidden",
    },
    pagination: {
        flexDirection: "row",
        position: "absolute",
        bottom: 25,
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
});

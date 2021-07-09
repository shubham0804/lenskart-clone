import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Image, useWindowDimensions } from "react-native";
import { categoriesIconSlideData } from "../../data";
import { COLORS } from "../../constants/theme";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Ripple from "react-native-material-ripple";
import { RFValue } from "react-native-responsive-fontsize";

export default CategoryGrid = ({ data, keyId }) => {
    // console.log(data);
    const width = useWindowDimensions().width;

    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        // console.log(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        // console.log(`Slide: ${slide}`);
        if (slide !== active) {
            setActive(slide);
        }
    };

    let categoriesIconData = data.map((category) => category.categories);
    categoriesIconData = categoriesIconData.flat();
    const chunkSize = 3;
    categoriesIconData = [...Array(Math.ceil(categoriesIconData.length / chunkSize))].map((_) =>
        categoriesIconData.splice(0, chunkSize)
    );
    // console.log(categoriesIconData);

    const scrollViewRef = useRef(null);

    return (
        // Categories Container
        <View style={styles.categoriesContainer}>
            {/* Label & Icon Container */}
            <View style={{ margin: 5 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    {categoriesIconSlideData.map((category, id) => {
                        // console.log(`Active: ${active}`);
                        return (
                            <Ripple
                                rippleDuration={300}
                                rippleOpacity={0.5}
                                rippleFades={false}
                                rippleColor="#c2c0c0"
                                style={
                                    active !== id
                                        ? styles.categoriesIconsLabelBox
                                        : styles.categoriesIconsLabelBoxActive
                                }
                                key={id.toString()}
                                onPress={() => {
                                    scrollViewRef.current.scrollTo({
                                        x: width * id,
                                        animated: true,
                                    });
                                    // console.log(width * id);
                                }}
                            >
                                <Text
                                    style={
                                        active !== id
                                            ? styles.categoriesIconsLabelText
                                            : styles.categoriesIconsLabelTextActive
                                    }
                                >
                                    {category.label.toUpperCase()}
                                </Text>
                            </Ripple>
                        );
                    })}
                </View>
            </View>

            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                disableIntervalMomentum={true}
                snapToInterval={wp(96)}
                // snapToInterval={335}
                // snapToInterval={390}
                // decelerationRate="normal"
                decelerationRate={0.8}
                overScrollMode="never"
                ref={scrollViewRef}
            >
                {categoriesIconData.map((icons, index) => {
                    if (index !== categoriesIconData.length - 1) {
                        return (
                            <View key={index.toString()}>
                                <Ripple
                                    rippleDuration={300}
                                    rippleOpacity={0.5}
                                    rippleFades={false}
                                    rippleColor="#c0c0c0"
                                    style={styles.categoriesIconContainer}
                                >
                                    <Image
                                        source={{ uri: icons[0].imageUrl }}
                                        style={styles.categoriesIcon}
                                    />
                                </Ripple>
                                <Ripple
                                    rippleDuration={300}
                                    rippleOpacity={0.5}
                                    rippleFades={false}
                                    rippleColor="#c0c0c0"
                                    style={styles.categoriesIconContainer}
                                >
                                    <Image
                                        source={{ uri: icons[1].imageUrl }}
                                        style={styles.categoriesIcon}
                                    />
                                </Ripple>
                                <Ripple
                                    rippleDuration={300}
                                    rippleOpacity={0.5}
                                    rippleFades={false}
                                    rippleColor="#c0c0c0"
                                    style={styles.categoriesIconContainer}
                                >
                                    <Image
                                        source={{ uri: icons[2].imageUrl }}
                                        style={styles.categoriesIcon}
                                    />
                                </Ripple>
                            </View>
                        );
                    } else {
                        return (
                            <React.Fragment key={index.toString()}>
                                <Image
                                    source={{ uri: icons[0].imageUrl }}
                                    style={styles.categoriesIcon}
                                />
                                <Image
                                    source={{ uri: icons[1].imageUrl }}
                                    style={styles.categoriesIcon}
                                />
                                <Image
                                    source={{ uri: icons[2].imageUrl }}
                                    style={[styles.categoriesIcon, { marginRight: wp(8) }]}
                                />
                            </React.Fragment>
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    categoriesContainer: {
        flex: 1,
        backgroundColor: "white",
        margin: 10,
        borderRadius: 5,
    },
    categoriesIconsLabelBox: {
        marginTop: hp(0.7),
        width: wp(29),
        // width: 100,
        height: hp(5.7),
        // height: 40,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    categoriesIconsLabelBoxActive: {
        // marginTop: 5,
        marginTop: hp(0.7),
        // width: 100,
        width: wp(29),
        // height: 40,
        height: hp(5.7),
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.secondary,
    },
    categoriesIconsLabelText: {
        color: "black",
        fontSize: RFValue(15),
    },
    categoriesIconsLabelTextActive: {
        color: "white",
        fontSize: RFValue(15),
    },
    categoriesIconContainer: {
        flex: 1,
        // justifyContent: "center",
        // width: wp(100),
    },
    categoriesIcon: {
        // backgroundColor: "red",
        height: undefined,
        width: wp(24),
        // width: 200,
        flex: 1,
        aspectRatio: 1,
        // width: 80,
        // height: 80,
        // margin: 8,
        margin: hp(1.1),
        // marginHorizontal: 13,
        marginHorizontal: wp(4),
        resizeMode: "contain",
        // alignSelf: "center",
    },
});

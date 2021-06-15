import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Image, useWindowDimensions } from "react-native";
import { categoriesIconSlideData } from "../../data";
import { COLORS } from "../../constants/theme";

import Ripple from "react-native-material-ripple";
import { RFValue } from "react-native-responsive-fontsize";

export default CategoriesIconSlide = () => {
    const width = useWindowDimensions().width;

    const [active, setActive] = useState(0);

    const change = ({ nativeEvent }) => {
        const slide = Math.floor(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== active) {
            setActive(slide);
        }
    };

    let categoriesIconData = categoriesIconSlideData.map((category) => category.categories);
    categoriesIconData = categoriesIconData.flat();
    const chunkSize = 3;
    categoriesIconData = [...Array(Math.ceil(categoriesIconData.length / chunkSize))].map((_) =>
        categoriesIconData.splice(0, chunkSize)
    );

    const scrollViewRef = useRef(null);

    return (
        // Categories Container
        <View style={styles.categoriesContainer}>
            {/* Label & Icon Container */}
            <View style={{ margin: 5 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    {categoriesIconSlideData.map((category, id) => {
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
                snapToInterval={360}
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
                                >
                                    <Image source={icons[0]} style={styles.categoriesIcon} />
                                </Ripple>
                                <Ripple
                                    rippleDuration={300}
                                    rippleOpacity={0.5}
                                    rippleFades={false}
                                    rippleColor="#c0c0c0"
                                >
                                    <Image source={icons[1]} style={styles.categoriesIcon} />
                                </Ripple>
                                <Ripple
                                    rippleDuration={300}
                                    rippleOpacity={0.5}
                                    rippleFades={false}
                                    rippleColor="#c0c0c0"
                                >
                                    <Image source={icons[2]} style={styles.categoriesIcon} />
                                </Ripple>
                            </View>
                        );
                    } else {
                        return (
                            <React.Fragment key={index.toString()}>
                                <Image source={icons[0]} style={styles.categoriesIcon} />
                                <Image source={icons[1]} style={styles.categoriesIcon} />
                                <Image source={icons[2]} style={styles.categoriesIcon} />
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
        marginBottom: -5,
        flex: 1,
        backgroundColor: "white",
        margin: 10,
        borderRadius: 5,
    },
    categoriesIconsLabelBox: {
        marginTop: 5,
        width: 100,
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    categoriesIconsLabelBoxActive: {
        marginTop: 5,
        width: 100,
        height: 40,
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
    categoriesIcon: {
        width: 80,
        height: 80,
        margin: 8,
        marginHorizontal: 18,
    },
});

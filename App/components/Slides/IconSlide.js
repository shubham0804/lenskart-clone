import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import RippleImage from "../RippleImage";
import { iconSlideData } from "../../data";

export default IconSlide = () => (
    <View style={{ marginTop: -50 }}>
        <ScrollView
            horizontal={true}
            contentContainerStyle={{ marginHorizontal: 3 }}
            showsHorizontalScrollIndicator={false}
        >
            {iconSlideData.map(({ id, icon }) => (
                <View style={{ marginHorizontal: 3 }} key={id}>
                    <RippleImage
                        rippleColor="rgba(44,44,44,0.3)"
                        rippleStyle={styles.iconSlidePressable}
                        imageSource={icon}
                        imageStyle={styles.iconSlideImage}
                    />
                </View>
            ))}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    iconSlideImage: {
        width: "100%",
        resizeMode: "contain",
        borderRadius: 5,
        overflow: "hidden",
        marginHorizontal: 5,
        paddingHorizontal: 10,
    },
    iconSlidePressable: {
        width: 95,
        marginRight: 3,
        marginTop: 4,
        alignItems: "center",
        justifyContent: "center",
        height: 55,
        // paddingHorizontal: 10,
    },
});

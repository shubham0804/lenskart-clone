import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { COLORS } from "../constants/theme";
import * as Linking from "expo-linking";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { RFValue } from "react-native-responsive-fontsize";

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText1}>Can we Help?</Text>
            {/* Contact Fields */}
            <View style={styles.contactFields}>
                <View>
                    {/* Contact us with icon */}
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            source={require("../assets/icons/footer/chat.png")}
                            style={styles.icon}
                        />
                        <Text style={styles.footerText2}>CONTACT US</Text>
                    </View>
                    {/* We are available */}
                    <Text style={styles.footerText3}>We are available</Text>
                </View>
                <View>
                    {/* Email us with icon */}
                    <Pressable
                        style={{ flexDirection: "row" }}
                        onPress={() => Linking.openURL("mailto: shubhambawa0804@gmail.com")}
                    >
                        <Image
                            source={require("../assets/icons/footer/email.png")}
                            style={styles.icon}
                        />
                        <Text style={styles.footerText2}>EMAIL</Text>
                    </Pressable>
                    {/* We are available */}
                    <Text style={styles.footerText3}>support@lenskart.com</Text>
                </View>
            </View>
        </View>
    );
}

// console.log(Dimensions.get("window").height);

const styles = StyleSheet.create({
    container: {
        width: "100%",
        // height: 150,
        height: hp(21),
        backgroundColor: COLORS.primary,
        // paddingHorizontal: 20,
        paddingHorizontal: wp(5.5),

        // bottom: 0,
    },
    footerText1: {
        color: "white",
        // backgroundColor: "red",
        // marginVertical: 25,
        marginVertical: hp(3.5),
        fontWeight: "bold",
        fontSize: RFValue(18),
    },
    footerText2: {
        color: COLORS.secondary,
        // color: COLORS.secondary,
        fontWeight: "900",
        fontSize: RFValue(14),
        // fontSize: 14,
        alignSelf: "center",
        // marginLeft: 5,
        marginLeft: wp(1.5),
    },
    footerText3: {
        color: "#b9c2c8",
        // marginTop: 3,
        marginTop: hp(0.4),
        fontSize: RFValue(14),
        // fontSize: 14,
    },
    contactFields: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        // width: 25,
        width: wp(6),
        // height: 25,
        height: wp(6),
        tintColor: COLORS.secondary,
    },
});

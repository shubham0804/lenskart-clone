import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { COLORS } from "../constants/theme";

const CartScreen = () => {
    return (
        <View style={styles.container}>
            {/* Empty Cart Image */}
            <Image style={styles.image} source={require("../assets/images/empty_cart.png")} />
            {/* Text Title */}
            <Text style={styles.title}>Your cart is empty!</Text>
            {/* Text Subtitle */}
            <Text style={styles.subtitle}>Add a few products and come here to checkout</Text>
            {/* Button-1 */}
            <Pressable style={styles.buttonOne}>
                <Text style={styles.textOne}>CONTINUE SHOPPING</Text>
            </Pressable>
            {/* Button-2 */}
            <Pressable style={styles.buttonTwo}>
                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                    {/* Whatsapp Icon */}
                    <Image
                        source={require("../assets/icons/chat.png")}
                        style={styles.buttonTwoIcon}
                    />
                    <Text style={styles.textTwo}>BUY ON CHAT</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
    image: {
        width: 175,
        height: 175,
    },
    title: {
        fontSize: 19,
        fontWeight: "800",
    },
    subtitle: {
        fontSize: 14,
        maxWidth: 200,
        textAlign: "center",
        marginVertical: 8,
    },
    buttonOne: {
        backgroundColor: COLORS.secondary,
        padding: 12,
        borderRadius: 5,
        margin: 10,
        elevation: 3,
    },
    textOne: {
        color: "white",
        fontWeight: "800",
    },
    buttonTwo: {
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.secondary,
        padding: 12,
        elevation: 3,
        margin: 3,
    },
    buttonTwoIcon: {
        width: 19,
        height: 19,
        alignSelf: "center",
        marginRight: 6,
        tintColor: COLORS.secondary,
    },
    textTwo: {
        color: COLORS.secondary,
        fontWeight: "900",
    },
});

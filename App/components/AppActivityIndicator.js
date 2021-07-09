import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { COLORS } from "../constants/theme";

const AppActivityIndicator = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={COLORS.secondary} />
        </View>
    );
};

export default AppActivityIndicator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

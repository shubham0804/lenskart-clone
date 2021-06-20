import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SearchBar = () => {
    const [text, onChangeText] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                placeholderTextColor="#88929A"
                style={styles.input}
                autoCapitalize="none"
                value={text}
                onChangeText={(text) => onChangeText(text)}
            />

            {text !== "" && (
                <MaterialCommunityIcons
                    name="close"
                    color="white"
                    size={23}
                    onPress={() => onChangeText("")}
                />
            )}
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        color: "white",
        fontSize: RFValue(16),
        flex: 1,
    },
});

import React from "react";
import { ScrollView, StyleSheet, View, StatusBar, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../constants/theme";
import { HeaderLeft, HeaderRight } from "../components/Header";
import {
    PromoSlide,
    IconSlide,
    CustomerReviewSlide,
    CategoriesIconSlide,
} from "../components/Slides/index";
import { LockdownNotice, Generic, LenskartAssurance } from "../components/Banners";
import Footer from "../components/Footer";

import { RFValue } from "react-native-responsive-fontsize";

const Stack = createStackNavigator();

export default function HomeScreenStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerTitle: "",
                    headerRight: () => <HeaderRight />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
            />
        </Stack.Navigator>
    );
}

const HomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.05)" />
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
            {/* Primary Color Background */}
            <View style={{ width: "100%", height: 55, backgroundColor: COLORS.primary }}></View>
            {/* Icon Slide */}
            <IconSlide />
            {/* Lockdown Notice  */}
            <LockdownNotice />
            {/* Promo Slider */}
            <PromoSlide />
            {/* Categories Icon Slider */}
            <CategoriesIconSlide />
            {/* Generic Banners */}
            <Generic />
            <View backgroundColor="#fbfbfb">
                {/* Lenskart Assurance Banner */}
                <Text
                    style={{
                        margin: 8,
                        paddingLeft: 10,
                        fontSize: RFValue(18),
                        fontWeight: "bold",
                        paddingVertical: 3,
                    }}
                >
                    Lenskart Assurance
                </Text>
                <LenskartAssurance />
                <Text
                    style={{
                        margin: 8,
                        paddingLeft: 10,
                        fontSize: RFValue(18),
                        // fontSize: 18,
                        fontWeight: "bold",
                        paddingVertical: 3,
                    }}
                >
                    Meet our Happy Customers
                </Text>
                {/* Customer Review Videos */}
                <CustomerReviewSlide />
            </View>
            {/* Footer */}
            <Footer />
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
    },
});

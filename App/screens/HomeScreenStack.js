import React from "react";
import { ScrollView, StyleSheet, View, StatusBar, Text, useWindowDimensions } from "react-native";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
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
import VideoScreen from "./VideoScreen";
import SearchScreen from "./SearchScreen";
import CartScreen from "./EmptyCartScreen";
import SearchBar from "../components/SearchBar";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { RFValue } from "react-native-responsive-fontsize";

const Stack = createStackNavigator();

export default function HomeScreenStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTintColor: "white",
            }}
            // initialRouteName="SearchScreen"
        >
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
                    headerRight: () => <HeaderRight navigation={navigation} />,
                    headerLeft: () => <HeaderLeft navigation={navigation} />,
                }}
            />
            <Stack.Screen
                name="VideoScreen"
                component={VideoScreen}
                options={({ route }) => ({
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerLeft: (props) => (
                        <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
                    ),
                    headerTintColor: "white",
                    title: route.params.title,
                })}
            />
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    headerLeft: (props) => (
                        <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
                    ),
                    headerTintColor: "white",
                    headerTitle: (props) => <SearchBar />,
                }}
            />
            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    headerLeft: (props) => (
                        <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
                    ),
                    headerTintColor: "white",
                    headerTitle: "Cart",
                }}
            />
        </Stack.Navigator>
    );
}

const HomeScreen = ({ navigation }) => {
    const windowWidth = useWindowDimensions().width;
    return (
        <View style={[styles.container]}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0.05)" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                style={{ flex: 1 }}
            >
                {/* Primary Color Background */}
                <View
                    style={{ width: "100%", height: hp(8), backgroundColor: COLORS.primary }}
                ></View>
                {/* <View style={{ width: "100%", height: 55, backgroundColor: COLORS.primary }}></View> */}
                {/* Icon Slide */}
                <IconSlide />
                {/* Lockdown Notice  */}
                <LockdownNotice />
                {/* Promo Slider */}
                <PromoSlide />
                {/* Categories Icon Slider */}
                <CategoriesIconSlide />
                {/* Generic Banners */}
                <Generic navigation={navigation} />
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
                    <LenskartAssurance navigation={navigation} />
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
                    <CustomerReviewSlide navigation={navigation} />
                </View>
                {/* Footer */}
                <Footer />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        // alignItems: "center",
        // justifyContent: "center",
    },
});

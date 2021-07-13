// require("dotenv").config();
import React, { useEffect, useState } from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    StatusBar,
    Text,
    useWindowDimensions,
    ActivityIndicator,
} from "react-native";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import { COLORS } from "../constants/theme";
import { HeaderLeft, HeaderRight } from "../components/Header";
import { BannerMini, BannerPager, CategoryGrid } from "../components/Slides/index";
import { Banner, BannerGrid, StoreLocator } from "../components/Banners";
import Footer from "../components/Footer";
import VideoScreen from "./VideoScreen";
import SearchScreen from "./SearchScreen";
import CartScreen from "./EmptyCartScreen";
import CategoryListScreen from "./CategoryListScreen";
import SearchBar from "../components/SearchBar";

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
            // initialRouteName="CategoryListScreen"
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
                    headerRight: () => <HeaderRight navigation={navigation} wallet={true} />,
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
            <Stack.Screen
                name="CategoryListScreen"
                component={CategoryListScreen}
                options={{
                    headerLeft: (props) => (
                        <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
                    ),
                    headerRight: () => <HeaderRight navigation={navigation} wallet={false} />,
                    headerTintColor: "white",
                    headerTitle: "Pass Cat. Name",
                }}
            />
        </Stack.Navigator>
    );
}

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const renderData = () => {
        return data.map((element, key) => {
            switch (element.dataType) {
                case "TYPE_BANNER_MINI":
                    return <BannerMini key={key.toString()} data={element.data} />;
                    break;
                case "TYPE_BANNER":
                    return (
                        <Banner key={key.toString()} data={element.data} navigation={navigation} />
                    );
                    break;
                case "TYPE_BANNER_PAGER":
                    if (element.data.length > 1) {
                        return (
                            <BannerPager
                                data={element.data}
                                key={key.toString()}
                                navigation={navigation}
                            />
                        );
                    } else {
                        let editedBanner = element.data[0];
                        editedBanner.aspectRatio = "NORMAL";
                        return (
                            <Banner
                                key={key.toString()}
                                data={editedBanner}
                                navigation={navigation}
                            />
                        );
                    }
                    break;
                case "TYPE_CATEGORY_GRID":
                    return <CategoryGrid data={element.data} key={key.toString()} />;
                    break;
                case "TYPE_STORE_LOCATOR":
                    return (
                        <StoreLocator data={element.metadata} keyId={key.toString()} key={key} />
                    );
                    break;
                case "TYPE_BANNER_GRID":
                    return (
                        <BannerGrid
                            key={key.toString()}
                            data={element.data}
                            navigation={navigation}
                        />
                    );
                    break;
                default:
                    break;
            }
        });
    };

    const homeApi = `https://area51.lenskart.io/api/v1/collection/home?offset=0&pagesize=40&personaId=ar_support_repeat_android`;
    const getData = async () => {
        try {
            let response = await fetch(homeApi);
            if (response && typeof response === "object") {
                response = await response.json();
                if (response.result && response.result.length > 1) {
                    setData(response.result);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {data.length > 0 && (
                <ScrollView
                    style={{ backgroundColor: "#f2f2f2" }}
                    overScrollMode="never"
                    showsVerticalScrollIndicator={false}
                >
                    {renderData()}
                    <Footer />
                </ScrollView>
            )}
            {isLoading && (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <ActivityIndicator size="large" color={COLORS.secondary} />
                </View>
            )}
        </View>
    );
};

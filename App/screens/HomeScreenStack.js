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
import {
    PromoSlide,
    BannerMini,
    BannerPager,
    CategoriesIconSlide,
    CategoryGrid,
} from "../components/Slides/index";
import {
    LockdownNotice,
    Generic,
    LenskartAssurance,
    Banner,
    BannerGrid,
    StoreLocator,
} from "../components/Banners";
import Footer from "../components/Footer";
import VideoScreen from "./VideoScreen";
import SearchScreen from "./SearchScreen";
import CartScreen from "./EmptyCartScreen";
import CategoryListScreen from "./CategoryListScreen";
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
            // initialRouteName="CategoryListScreen"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen2}
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

const HomeScreen2 = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const renderData = () => {
        return data.map((element, key) => {
            switch (element.dataType) {
                case "TYPE_BANNER_MINI":
                    // console.log(element);
                    // return <Text key={key}>Banner Mini</Text>;
                    return <BannerMini key={key.toString()} data={element.data} />;
                    break;
                case "TYPE_BANNER":
                    // return <Text key={key}>Banner</Text>;
                    return <Banner key={key.toString()} data={element.data} />;
                    break;
                case "TYPE_BANNER_PAGER":
                    // return <Text key={key}>Banner Pager</Text>;
                    return (
                        <BannerPager
                            data={element.data}
                            key={key.toString()}
                            navigation={navigation}
                        />
                    );
                    break;
                case "TYPE_CATEGORY_GRID":
                    // return <Text key={key}>Category Grid</Text>;
                    return <CategoryGrid data={element.data} key={key.toString()} />;
                    break;
                case "TYPE_STORE_LOCATOR":
                    // console.log("store locator banner");
                    // return <Text key={key}>store locator</Text>;
                    return (
                        <StoreLocator data={element.metadata} keyId={key.toString()} key={key} />
                    );
                    break;
                case "TYPE_BANNER_GRID":
                    // return <Text key={key.toString()}>Banner Grid</Text>;
                    return <BannerGrid key={key.toString()} data={element.data} />;
                    break;
                default:
                    // return <Text key={key.toString()}>Unknown entity</Text>;
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
                    // setData(filterData(response.result));
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
                    // contentContainerStyle={{ marginHorizontal: 7 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* <View
                        style={{ width: "100%", height: hp(8), backgroundColor: COLORS.primary }}
                    /> */}

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        // alignItems: "center",
        // justifyContent: "center",
    },
});

import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, LogBox, ActivityIndicator } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Footer from "../components/Footer";

import { TypeLink, TypeProducts, TypeBannerGrid } from "../components/SearchScreen";
import { COLORS } from "../constants/theme";

const SearchScreen = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const searchApi = `https://area51.lenskart.io/api/v1/collection/search?offset=0&pagesize=40&personaId=ar_support_repeat_android`;
    const getData = async () => {
        try {
            let response = await fetch(searchApi);
            if (response && typeof response === "object") {
                response = await response.json();
                if (response.result && response.result.length > 1) {
                    setData(filterData(response.result));
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
        getData();
    }, []);

    const filterData = (data) => {
        const filter = data.filter(
            (element) => element.dataType === "TYPE_SPACER" || (element.data && true)
        );
        let previousElement = null;
        return filter.filter((element) => {
            if (element.dataType === previousElement) {
                previousElement = element.dataType;
                return false;
            } else {
                previousElement = element.dataType;
                return true;
            }
        });
    };

    const renderData = () => {
        return data.map((element, key) => {
            switch (element.dataType) {
                case "TYPE_SPACER":
                    return <View key={key} style={styles.spacer} name="spacer" />;
                case "TYPE_LINK":
                    return TypeLink(element, key);
                case "TYPE_PRODUCTS":
                    return TypeProducts(element, key);
                case "TYPE_BANNER_GRID":
                    return TypeBannerGrid(element.data, key);
                default:
                    return null;
            }
        });
    };

    return (
        <View style={styles.container}>
            {data.length > 0 && (
                <ScrollView style={{ backgroundColor: "#f2f2f2" }} overScrollMode="never">
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

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    spacer: {
        height: 20,
        height: wp(6),
    },
});

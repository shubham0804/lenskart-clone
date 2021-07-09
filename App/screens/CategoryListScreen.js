import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { COLORS } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import AppActivityIndicator from "../components/AppActivityIndicator";
import { SingleBannerPager } from "../components/Slides/Banner-Pager";
import { ListViewProduct, GridViewProdcut } from "../components/Product";

const TopBarOptions = ({ gridView, setGridView }) => {
    const PressableIcon = ({ iconName }) => (
        <Pressable
            style={[styles.listTypeIcon]}
            onPress={() => setGridView(!gridView)}
            android_ripple={{
                rippleColor: "black",
                radius: 25,
            }}
        >
            <Ionicons name={iconName} size={25} color={COLORS.secondary} />
        </Pressable>
    );

    return (
        <View style={styles.topOptionsBarContainer}>
            {/* Button-1 */}
            <Pressable style={[styles.topBarButton]}>
                <Text style={styles.topBarButtonText}>FIND MY FIT</Text>
            </Pressable>
            {/* Button-2 */}
            <Pressable style={styles.topBarButton}>
                <Text style={styles.topBarButtonText}>CREATE 3D</Text>
            </Pressable>
            {/* Toggle View */}
            <View style={{ flex: 1, justifyContent: "center" }}>
                {gridView ? <PressableIcon iconName="list" /> : <PressableIcon iconName="grid" />}
            </View>
        </View>
    );
};

const CategoryListScreen = ({ route }) => {
    const categoryId = route.params.categoryId;
    const category_id = 8736;
    // const category_id = 8386;
    const [gridView, setGridView] = useState(false);
    const [data, setData] = useState([]);
    const [maxProducts, setMaxProducts] = useState(0);

    useEffect(() => {
        fetchMore();
    }, []);

    const fetchMore = async () => {
        const offset = data.length;
        const baseUrl = `https://area51.lenskart.io/api/v1/category/${categoryId}?arEnabled=false&colorOptionsCount=0&customFilters=false&limit=40&offset=${offset}&tier=gold_original`;

        if (data.length === 0 || data.length < maxProducts) {
            const response = await fetch(baseUrl);
            const productList = await response.json();

            setMaxProducts(productList.meta.count);
            setData((prevData) => [
                ...prevData,
                // ...Array.from({ length: 40 }).map((_, i) => i + 1 + prevData.length),
                ...productList.result,
            ]);
            // console.log(data.length);
        }
    };

    const renderProduct = ({ item }) => {
        switch (item.dataType) {
            case "TYPE_PRODUCT":
                if (gridView) {
                    return <GridViewProdcut product={item.data} />;
                } else {
                    return <ListViewProduct product={item.data} />;
                }
            case "TYPE_BANNER_PAGER":
                return <SingleBannerPager imageUrl={item.data[0].imageUrl} />;
        }
        return <Text style={{ marginLeft: 20 }}>Okay</Text>;
    };

    return (
        <View style={styles.container}>
            {data.length === 0 ? (
                <AppActivityIndicator />
            ) : (
                data.length !== 0 && (
                    <>
                        {/* Top Options Bar */}
                        <TopBarOptions gridView={gridView} setGridView={setGridView} />
                        {/* Product List */}
                        <View>
                            <FlatList
                                data={data}
                                keyExtractor={(_, index) => index.toString()}
                                renderItem={renderProduct}
                                onEndReached={fetchMore}
                                onEndReachedThreshold={0.4}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                        {/* Product Count & Filter Icon */}
                    </>
                )
            )}
        </View>
    );
};

export default CategoryListScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lighterGrey,
        flex: 1,
    },
    listTypeIcon: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
    },
    topOptionsBarContainer: {
        flexDirection: "row",
        backgroundColor: "#f4f8f9",
        // backgroundColor: "green",
        height: 55,
        elevation: 5,
        paddingHorizontal: 10,
    },
    topBarButton: {
        alignItems: "center",
        justifyContent: "center",
        width: "40%",
        backgroundColor: "white",
        marginVertical: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        elevation: 3,
    },
    topBarButtonText: {
        fontWeight: "900",
        fontSize: 15,
    },
});

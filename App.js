import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Pressable,
} from "react-native";
import CustomTile from "./components/tile";

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.header1}>Bookshop</Text>
                <View style={styles.cart}>
                    <Image
                        style={styles.cartImage}
                        source={require("./assets/cart.png")}
                    />
                    <Text style={styles.cartCount}>0</Text>
                </View>
            </View>
            <View style={styles.productContainer}>
                <CustomTile />
                <CustomTile />
                <CustomTile />
                <CustomTile />
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 56,
        backgroundColor: "#fff",
    },

    head: {
        flex: 1,
        flexDirection: "row",
    },

    header1: {
        fontSize: 32,
        fontWeight: "800",
        margin: 12,
    },

    cart: {
        margin: 12,
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },

    cartImage: {
        width: 24,
        height: 24,
        marginRight: 8,
    },

    cartCount: {
        fontSize: 24,
        fontWeight: "300",
    },

    productContainer: {
        marginTop: 20,
    },
});

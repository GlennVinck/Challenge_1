import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.header1}>Bookshop</Text>
                <View style={styles.cart}>
                    <Image
                        style={styles.cartImage}
                        source={require("./assets/favicon.png")}
                    />
                    <Text style={styles.cartCount}>0</Text>
                </View>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    head: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "red",
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
        width: 30,
        height: 30,
        marginRight: 5,
    },

    cartCount: {
        fontSize: 24,
        fontWeight: "400",
    },

    container: {
        paddingTop: 56,
        backgroundColor: "#fff",
    },
});

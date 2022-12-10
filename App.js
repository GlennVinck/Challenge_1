import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Pressable,
} from "react-native";

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
                <View style={styles.tile}>
                    <Text style={styles.header2}>A Book Title</Text>
                    <Text style={styles.writer}>By Some random dude</Text>
                    <Text style={styles.details}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam
                    </Text>
                    <View style={styles.tileFooter}>
                        <Text>ISBN 978-8-1783-1191-3</Text>
                        <Pressable style={styles.button}>
                            <Text style={styles.text}>READ</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.productContainer}>
                <View style={styles.tile}>
                    <Text style={styles.header2}>A Book Title</Text>
                    <Text style={styles.writer}>By Some random dude</Text>
                    <Text style={styles.details}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam
                    </Text>
                    <View style={styles.tileFooter}>
                        <Text>ISBN 978-8-1783-1191-3</Text>
                        <Pressable style={styles.button}>
                            <Text style={styles.text}>READ</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.productContainer}>
                <View style={styles.tile}>
                    <Text style={styles.header2}>A Book Title</Text>
                    <Text style={styles.writer}>By Some random dude</Text>
                    <Text style={styles.details}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam
                    </Text>
                    <View style={styles.tileFooter}>
                        <Text>ISBN 978-8-1783-1191-3</Text>
                        <Pressable style={styles.button}>
                            <Text style={styles.text}>READ</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={styles.productContainer}>
                <View style={styles.tile}>
                    <Text style={styles.header2}>A Book Title</Text>
                    <Text style={styles.writer}>By Some random dude</Text>
                    <Text style={styles.details}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam
                    </Text>
                    <View style={styles.tileFooter}>
                        <Text>ISBN 978-8-1783-1191-3</Text>
                        <Pressable style={styles.button}>
                            <Text style={styles.text}>READ</Text>
                        </Pressable>
                    </View>
                </View>
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
        marginTop: 40,
    },

    tile: {
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderBottomColor: "#B4B8DA",
        borderBottomWidth: 1,
        borderStyle: "solid",
    },

    header2: {
        fontSize: 24,
        fontWeight: "400",
    },

    writer: {
        fontSize: 12,
        fontWeight: "200",
        marginBottom: 10,
    },

    details: {
        fontSize: 16,
        fontWeight: "200",
        marginBottom: 10,
    },

    tileFooter: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    button: {
        padding: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 5,
    },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header1}>Books</Text>
            <View></View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header1: {
        fontSize: 32,
        fontWeight: "800",
        margin: 12,
    },

    container: {
        paddingTop: 56,
        backgroundColor: "#fff",
    },
});

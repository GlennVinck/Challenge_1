import { View, Text, Pressable, StyleSheet } from "react-native";

const CustomTile = () => {
    return (
        <View style={styles.tile}>
            <Text style={styles.header2}>A Book Title</Text>
            <Text style={styles.writer}>By Some random dude</Text>
            <Text style={styles.details}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
            </Text>
            <View style={styles.tileFooter}>
                <Text>ISBN 978-8-1783-1191-3</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>READ</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tile: {
        paddingTop: 20,
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

export default CustomTile;

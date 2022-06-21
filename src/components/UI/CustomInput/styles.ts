import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        textTransform: 'capitalize',
        color: '#4e4e4e',
        marginBottom: 5,
        paddingLeft: 7,
    },
    input: {
        fontFamily: 'poppins',
        letterSpacing: 1,
        backgroundColor: '#ededed',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    multiline: {
        minHeight: 200,
        textAlignVertical: 'top',
    }
})

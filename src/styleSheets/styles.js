import { StyleSheet } from 'react-native';


export const FontFamily = StyleSheet.create({
    arabicMedium: {
        fontFamily: "NeoSansArabicMedium",
    },
    arabicRegular: {
        fontFamily: "Neo Sans Arabic Regular",
    },
});

export const Generic = StyleSheet.create({
    errorMessage: {
        color: "red",
        width: '100%',
        height: 22,
        fontSize: 16,
        marginBottom: 28,
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "rgb(119, 125, 132)",
        textAlign: "center"
    },
    successMessage: {
        color: "red",
        width: '100%',
        height: 22,
        fontSize: 16,
        marginBottom: 28,
        textDecorationLine: "none",
        textDecorationStyle: "solid",
        textDecorationColor: "rgb(119, 125, 132)"
    },
});
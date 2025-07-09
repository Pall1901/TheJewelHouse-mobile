import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#FFFFFFCC',
        alignItems: 'center',
        zIndex: 5,
        shadowOffset: {width: 2, height: 4}, // for IOS
        elevation: 1, // for Android
        justifyContent: 'center',
    },
});
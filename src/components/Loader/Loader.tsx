import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#000000a8',
        alignItems: 'center',
        zIndex: 100,
        shadowOffset: {width: 2, height: 4}, // for IOS
        elevation: 10, // for Android
        justifyContent: 'center',
    },
});
export default Loader;

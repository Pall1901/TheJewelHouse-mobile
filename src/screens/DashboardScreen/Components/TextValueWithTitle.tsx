import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles'

type PropTextValueWithTitle = {
    title: string;
    value: string;
    style?:any; // Optional style prop for custom styling
}

const TextValueWithTitle = (props: PropTextValueWithTitle) => {

    return (
        <View style={{...styles.cardView, ...props.style}}>
            <Text style={styles.analyticsValue}>
                {props.value}
            </Text>
            <Text style={styles.analyticsLabel}>{props.title}</Text>
        </View>
    )
}

export default TextValueWithTitle

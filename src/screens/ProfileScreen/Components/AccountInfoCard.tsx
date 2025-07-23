import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import AppSvgIcon, { SVGName } from '../../../app-res/AppSvgIcon'
import AppDimension from '../../../app-res/AppDimension'
import AppColor from '../../../app-res/AppColor'

type AccountInfoCardProp = {
    title: string;
    icon?: SVGName;
    value: any;
    style?:any;
}

const AccountInfoCard = (props: AccountInfoCardProp) => {

    return (
        <View style={[styles.card1, styles.row,props.style]}>
            <View style={[styles.rowView, styles.centerView]}>
                {AppSvgIcon(
                    props.icon,
                    AppColor.primary,
                    undefined,
                    AppDimension.SPACING_X_18,
                    AppDimension.SPACING_Y_22,
                )}
                <Text accessible={true} testID={`profileScreen-text-${props.title}`} style={styles.headerLabel1}>{props.title}</Text>
            </View>
            <Text accessible={true} testID={`profileScreen-text-${props.value}`} style={styles.value}>{props.value}</Text>
        </View>
    )
}

export default AccountInfoCard

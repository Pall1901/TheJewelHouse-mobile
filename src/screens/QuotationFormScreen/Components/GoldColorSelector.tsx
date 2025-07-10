import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppDimension from '../../../app-res/AppDimension';
import AppColor from '../../../app-res/AppColor';
import AppFontSize from '../../../app-res/AppFontSize';
import AppFontFamily from '../../../app-res/AppFontFamily';
import { GoldColor } from '../../../utils/enums';

interface GoldColorSelectorProps {
    selectedColor: GoldColor;
    onSelect: (color: GoldColor) => void;
}

const GoldColorSelector: React.FC<GoldColorSelectorProps> = ({ selectedColor, onSelect }) => {
    const colors = [
        { name: GoldColor.YELLOW, hex: '#FFD700' },
        { name: GoldColor.WHITE, hex: '#FFFFFF' },
        { name: GoldColor.ROSE, hex: '#F7C6C7' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Gold Color</Text>
            <View style={styles.row}>
                {colors.map(color => (
                    <TouchableOpacity
                        key={color.name}
                        style={[
                            styles.circle,
                            {
                                backgroundColor: color.hex,
                                borderWidth: selectedColor === color.name ? 2 : 1,
                                borderColor: selectedColor === color.name ? '#555' : '#ccc',
                            },
                        ]}
                        onPress={() => onSelect(color.name as GoldColor)}
                    />
                ))}
            </View>
        </View>
    );
};

export default GoldColorSelector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: AppDimension.SPACING_X_10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: AppDimension.SPACING_X_10,
        paddingVertical: AppDimension.SPACING_X_10,
        backgroundColor: AppColor.white,
        borderRadius: AppDimension.SPACING_X_10,
        borderColor: AppColor.primary,
        borderWidth: AppDimension.SPACING_X_01,
        //justifyContent: 'space-between',
    },
    label: {
      color: AppColor.black,
      fontSize: AppFontSize.FONT_SIZE_16,
      fontFamily: AppFontFamily.ManropeExtraBold,
      flex:0.5
    },
    row: {
        flexDirection: 'row',
        
    },
    circle: {
        width: AppDimension.SPACING_X_32,
        height: AppDimension.SPACING_X_32,
        borderRadius: AppDimension.SPACING_X_16,
        marginRight: AppDimension.SPACING_X_12,
    },
});

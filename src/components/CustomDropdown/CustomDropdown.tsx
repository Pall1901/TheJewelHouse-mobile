import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';
import AppFontSize from '../../app-res/AppFontSize';
import DropdownModal from '../Dropdown/DropdownModal';
import Icon, { Icons } from '../Icon/Icons';
type ActionItem = {
    value: string ;
    name: string;
    color?: string;
};

type CustomDropdownProps = {
    placeholder?: string;
    actionItems: ActionItem[];
    onSelect: (item: ActionItem) => void;
    selectedValue?: ActionItem;
    wrapperStyle?: object;
    title ?: string;
};

const CustomDropdown = ({
    placeholder = 'Select an option',
    actionItems,
    onSelect,
    selectedValue,
    wrapperStyle,
    title
}: CustomDropdownProps) => {
    const [actionSheetVisible, setActionSheetVisible] = useState(false);

    const openActionSheet = () => {
        setActionSheetVisible(true);
    };

    const closeActionSheet = () => {
        setActionSheetVisible(false);
    };

    const handleSelect = (item: ActionItem) => {
        onSelect(item);
        closeActionSheet();
    };

    return (
        <View style={{...wrapperStyle}}>
            <Text style={styles.titleText}>{title}</Text>
            <TouchableOpacity
                style={[styles.dropdownContainer]}
                onPress={openActionSheet}
                activeOpacity={0.7}>
                <Text style={styles.dropdownText}>
                    {selectedValue ? selectedValue.name : placeholder}
                </Text>
                <Icon type={Icons.Ionicons} size={24} name={"chevron-down"} color={AppColor.primary} />

            </TouchableOpacity>

            <DropdownModal
                actionSheet={actionSheetVisible}
                select={handleSelect}
                actionItems={actionItems}
                closeActionSheet={closeActionSheet}
            />
        </View>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    dropdownContainer: {
       // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: AppColor.primary,
        height: AppDimension.SPACING_Y_50,
        borderRadius: AppDimension.SPACING_X_10,
        paddingHorizontal: AppDimension.SPACING_X_10,
    },
    dropdownText: {
        color: '#333',
        fontSize: AppFontSize.FONT_SIZE_16,
        flex: 1,
    },
    titleText :{
        color: AppColor.black,
        fontSize: AppFontSize.FONT_SIZE_16,
        marginStart: AppDimension.SPACING_X_05,
        marginBottom: AppDimension.SPACING_Y_02,
        fontFamily: 'Manrope-Bold',
    }
});

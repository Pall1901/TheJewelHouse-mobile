import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import AppColor from '../../app-res/AppColor';
import AppDimension from '../../app-res/AppDimension';
import AppFontSize from '../../app-res/AppFontSize';
import DropdownModal from '../Dropdown/DropdownModal';
import Icon, { Icons } from '../Icon/Icons';
type ActionItem = {
    value: string | number;
    name: string;
    color?: string;
};

type CustomDropdownProps = {
    placeholder?: string;
    actionItems: ActionItem[];
    onSelect: (item: ActionItem) => void;
    selectedValue?: ActionItem;
};

const CustomDropdown = ({
    placeholder = 'Select an option',
    actionItems,
    onSelect,
    selectedValue,
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
        <>
            <TouchableOpacity
                style={styles.dropdownContainer}
                onPress={openActionSheet}
                activeOpacity={0.7}
            >
                <Text style={styles.dropdownText}>
                    {selectedValue ? selectedValue.name : placeholder}
                </Text>
                <Icon type={Icons.Ionicons} size={30} name={"chevron-down"} color={AppColor.primary} />

            </TouchableOpacity>

            <DropdownModal
                actionSheet={actionSheetVisible}
                select={handleSelect}
                actionItems={actionItems}
                closeActionSheet={closeActionSheet}
            />
        </>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    dropdownContainer: {
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
});

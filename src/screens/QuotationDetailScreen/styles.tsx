import { StyleSheet } from "react-native";
import AppDimension from "../../app-res/AppDimension";
import AppColor from "../../app-res/AppColor";

export const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 14,
        marginBottom: AppDimension.SPACING_X_10,
    },

    sectionHeader: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        color: '#333',
    },
    sectionHeaderContainer: {
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#bbb',
        marginBottom: 10,
    },
    totalLabel: {
        fontSize: 16,
    },
    totalValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: AppColor.primary,
    },
    row: {
        flexDirection: 'row',
        flex: 1, // Makes both items occupy equal width
    },
    label: {
        color: '#555',
        fontWeight: 'bold',
        marginRight: 4,
    },
    value: {
        color: '#000',
        marginRight: 12,
    },
    mainRow: {
        flexDirection: 'row',
        marginBottom: 4,
        justifyContent: 'space-between'
    },
})
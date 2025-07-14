import { StyleSheet } from "react-native";
const PRIMARY_COLOR = 'rgb(0,98,255)';
const WHITE = '#ffffff';
const BORDER_COLOR = '#DBDBDB';

export const styles = StyleSheet.create({
    modalContent: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      marginLeft: 8,
      marginRight: 8,
      marginBottom: 20,
    },
    actionSheetText: {
      fontSize: 18,
      color: PRIMARY_COLOR
    },
    actionSheetView: {
      backgroundColor: WHITE,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 16,
      paddingBottom: 16,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: BORDER_COLOR
    }
  });
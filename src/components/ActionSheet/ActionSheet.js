import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableHighlight, View, ScrollView } from 'react-native';
import AppColor from '../../app-res/AppColor';
import { styles } from './styles';

const ActionSheet = props => {
  const { actionItems } = props;
  const WHITE = '#ffffff';

  const cancelItem = {
    value: 'cancel',
    name: 'Cancel',
  };

  const bindAction = actionItem => {
    if (actionItem.value !== 'cancel') {
      props?.select(actionItem);
    }
    props?.onCancel();
  };

  return (
    <View style={styles.modalContent} testID={`actionSheet-view`}>
      {/* Scrollable list of main items */}
      <ScrollView
        style={{ maxHeight: 300 }} // adjust as needed
        bounces={false}
      >
        {actionItems.map((actionItem, index) => {
          return (
            <TouchableHighlight
              style={[
                styles.actionSheetView,
                index === 0 && {
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
                index === actionItems.length - 1 && {
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                },
              ]}
              underlayColor={'#f7f7f7'}
              key={index + actionItem.name}
              onPress={() => bindAction(actionItem)}
              testID={`actionSheet-button-${actionItem.name}`}
            >
              <Text
                allowFontScaling={false}
                style={[
                  styles.actionSheetText,
                  props?.actionTextColor && { color: props?.actionTextColor },
                  { color: actionItem.color || AppColor.black },
                ]}
                testID={`actionSheet-button-test-${actionItem.name}`}
              >
                {actionItem.name}
              </Text>
            </TouchableHighlight>
          );
        })}
      </ScrollView>

      {/* Separate always-visible cancel button */}
      <TouchableHighlight
        style={[
          styles.actionSheetView,
          {
            borderBottomWidth: 0,
            backgroundColor: WHITE,
            marginTop: 8,
            borderRadius: 12,
          },
        ]}
        underlayColor={'#f7f7f7'}
        onPress={() => bindAction(cancelItem)}
        testID={`actionSheet-button-${cancelItem.name}`}
      >
        <Text
          allowFontScaling={false}
          style={[
            styles.actionSheetText,
            { color: '#fa1616' },
          ]}
          testID={`actionSheet-button-test-${cancelItem.name}`}
        >
          {cancelItem.name}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default ActionSheet;

ActionSheet.propTypes = {
  actionItems: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      name: PropTypes.string,
      color: PropTypes.string,
    }),
  ),
  onCancel: PropTypes.func,
  actionTextColor: PropTypes.string,
  select: PropTypes.func.isRequired,
};

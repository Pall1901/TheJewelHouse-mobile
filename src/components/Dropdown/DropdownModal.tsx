import { StyleSheet, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import ActionSheet from '../ActionSheet/ActionSheet';


type ModalProps = {
    actionSheet: boolean;
    select: (obj:any) => void;
    actionItems: any;
    closeActionSheet: any;
  };

const DropdownModal = (props: ModalProps) => {
  return (
    <View>
      <Modal
        animationIn={'slideInUp'}
        isVisible={props.actionSheet}
        hasBackdrop={true}
        style={{
          margin: 0,
          justifyContent: 'flex-end'
        }}
        testID='gotoTrading-model'
      >
        <ActionSheet
          actionItems={props.actionItems}
          onCancel={props.closeActionSheet}
          select={props.select}
        />
      </Modal>
    </View>
  )
}

export default DropdownModal

const styles = StyleSheet.create({})    
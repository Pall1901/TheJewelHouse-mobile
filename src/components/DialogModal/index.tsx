import React from 'react';
import { Modal, Text, View } from 'react-native';
import AppColor from '../../app-res/AppColor';
import ButtonComponent from '../ButtonComponent';
import Icon, { Icons } from '../Icon/Icons';
import { styles } from './styles';
import { isNullUndefinedOrEmpty } from '../../utils/helper/IsNullUndefinedOrEmpty';

type DialogModalProp = {
  visible: boolean;
  onClose: () => void;
  icon?: string;
  title: string;
  description: string;
  button: string;
  header?: string;
  headColor?: string;
  screen?: string;
}

const DialogModal = ({ visible, onClose, icon, title, description, header, button, headColor, screen }: DialogModalProp) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      testID={`${screen}-modal-container`}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Icon type={Icons.Ionicons} size={60} name={icon} color={headColor ?? AppColor.primary} />
          {!isNullUndefinedOrEmpty(header)
            &&
            <Text style={[styles.modalHead, { color: headColor ?? AppColor.primary }]} testID={`${screen}-modal-header`}>{header}</Text>}

          <Text style={styles.modalTitle} testID={`${screen}-modal-title`}>{title}</Text>
          <Text style={styles.modalText} testID={`${screen}-modal-description`}>{description}</Text>


          <ButtonComponent
            title={button}
            onPress={onClose}
            screen={screen}
          />
        </View>
      </View>
    </Modal>
  );
};


export default DialogModal;

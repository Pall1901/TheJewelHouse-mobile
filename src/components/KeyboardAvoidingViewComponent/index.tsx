import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import { OperatingSystemType } from '../../utils/enums';
import { styles } from './styles';

interface KeyboardAvoidingViewComponentProps {
  children:
  | boolean
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | null
  | undefined;
}

const KeyboardAvoidingViewComponent = ({
  children,
}: KeyboardAvoidingViewComponentProps) => {
  return (
    <KeyboardAvoidingView
      //keyboardVerticalOffset={40}
      behavior={Platform.OS === OperatingSystemType.IOS ? 'padding' : undefined}
      style={styles.view}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.view}
        contentContainerStyle={styles.flexGrow}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingViewComponent;



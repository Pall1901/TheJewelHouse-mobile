import React from 'react';
import { TouchableOpacity } from 'react-native';
import { tID } from '../../utils/Helper';

interface TouchableComponentProps {
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
    onPress: any;
    screen: string;
    button: string;
    style?: any;
}

const TouchableComponent = ({ children, onPress, screen, button, style }: TouchableComponentProps) => {
    return (
        <TouchableOpacity
            style={style}
            testID={tID(`${screen}-button-${button}`)}
            accessibilityLabel={`${screen}-button-${button}`}
            onPress={() => onPress()}>
            {children}
        </TouchableOpacity>
    )
}

export default TouchableComponent
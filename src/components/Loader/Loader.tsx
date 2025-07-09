import React from 'react';
import { View, Image } from 'react-native';
import AppImages from '../../app-res/AppImages';
import { styles } from './styles';

const Loader = ({ screenName }: { screenName?: string }) => {
    const testID = `${screenName}-loader`

    return (
        <View style={styles.container}
            accessible={true}
            testID={testID}
            accessibilityLabel={testID}
        >
            <Image
                resizeMode='contain'
                style={{ width: 120, height: 60 }}
                source={{ uri : AppImages.loader}}
            />
        </View>
    );
};


export default Loader;

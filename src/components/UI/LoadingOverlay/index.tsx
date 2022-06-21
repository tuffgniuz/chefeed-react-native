import { FC } from "react";
import { ActivityIndicator, View } from "react-native"

import { styles } from './styles';

const LoadingOverlay: FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='white' />
        </View>
    )
}

export default LoadingOverlay;


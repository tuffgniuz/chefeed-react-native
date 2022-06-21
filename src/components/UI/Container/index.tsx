import { FC } from "react";
import { SafeAreaView } from "react-native";

import styles from './styles';

const Container: FC = ({ children, style }) => {
     
    return (
        <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    );
}

export default Container;

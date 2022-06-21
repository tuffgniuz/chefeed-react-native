import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomText from "../CustomText";

import styles from './styles';

interface Props {
    text: string,
    onPress: () => any,
}

const Button: FC<Props> = ({ text, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.btn}>
                <CustomText text={text} style={styles.content} />
            </View>
        </Pressable>
    )
}

export default Button;

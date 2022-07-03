import { FC } from "react"
import { Pressable, StyleSheet, View } from "react-native"
import CustomText from "./CustomText"

interface Props {
    text: string,
    btnStyle?: {},
    textStyle?: {},
    onPress: () => any,
}

const Button: FC<Props> = ({ text, onPress, btnStyle, textStyle }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={[styles.btn, btnStyle]}>
                <CustomText style={[styles.text, textStyle]}>{text}</CustomText>    
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        backgroundColor: '#59c49c',
        marginBottom: 15,
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 16
    }
})

export default Button;

import { StyleSheet, Text } from "react-native"
import { useFonts, Mukta_400Regular } from "@expo-google-fonts/mukta";
import { FC } from "react";

interface Props {
    style: any
}

const CustomText: FC<Props> = ({ children, style }) => {
    const [fontsLoaded] = useFonts({ 'mukta': Mukta_400Regular })
    
    if (!fontsLoaded) {
        return null;
    }

    return (
        <Text style={[styles.text, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#fafafa',
        fontFamily: 'mukta'
    } 
})

export default CustomText;

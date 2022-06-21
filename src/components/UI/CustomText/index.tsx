import { StyleSheet, Text } from "react-native"
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins"
import AppLoading from "expo-app-loading";

const CustomText: FC = ({ text, style }) => {
    const [fontsLoaded] = useFonts({ 'poppins': Poppins_400Regular })
    
    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <Text style={[styles.text, style]}>{ text }</Text>
    )
}

const styles = StyleSheet.create({
    text: {
       fontFamily: 'poppins',
       textDecorationLine: 'none',
       fontSize: 16,
       letterSpacing: 1,
       color: '#4e4e4e'
    }
})

export default CustomText;

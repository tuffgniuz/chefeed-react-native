import { StyleSheet, Text } from "react-native"
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue"

const Title = ({ children }) => {
    const [fontsLoaded] = useFonts({ 'bn': BebasNeue_400Regular })
    
    // if (!fontsLoaded) {
    //     return undefined
    // }

    return <Text style={styles.title}>{ children }</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'bn',
        fontSize: 24
    }
})

export default Title;

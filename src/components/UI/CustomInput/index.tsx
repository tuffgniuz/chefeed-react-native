import { TextInput, View } from "react-native"
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import CustomText from "../CustomText";
import { styles } from "./styles";

interface Props {
    label: string,
    options: {}
}

const CustomInput: FC<Props> = ({ label, options }) => {
    const [fontsLoaded] = useFonts({ 'poppins': Poppins_400Regular })
    
    let inputStyles = [styles.input];

    if (options && options.multiline) {
        inputStyles.push(styles.multiline)
    }

    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <View>
        <CustomText text={label} style={styles.label} />
        <TextInput style={inputStyles} {...options} />
        </View>
    )
}

export default CustomInput;

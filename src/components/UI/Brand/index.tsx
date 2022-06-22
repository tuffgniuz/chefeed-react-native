import { Text } from "react-native"
import { useFonts, Mansalva_400Regular } from '@expo-google-fonts/mansalva';
import AppLoading from "expo-app-loading";
import { styles } from './styles';

const Brand: FC = ({ style }) => {
    let [fontsLoaded] = useFonts({ 'mansalva': Mansalva_400Regular })
    
    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <Text style={[styles.text, style]}>CheFeed</Text>
    )
}

export default Brand;

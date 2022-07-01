import { Pressable, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles'
import RecipeFormScreen from "../../../screens/RecipeFormScreen";

const AddButton = () => {

    return (
        <View style={styles.btn}>
            <Ionicons name='add-outline' size={26} color='#fafafa' />
        </View>
    )
}

export default AddButton;

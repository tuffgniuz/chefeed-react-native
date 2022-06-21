import { FC } from "react";
import { Image, Pressable, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import { styles } from './styles';
import CustomText from "../UI/CustomText";

interface Props {
    id: string,
    imageUri?: string,
    title: string,
    description?: string,
    cookingTime?: number,
}

const RecipeCard: FC<Props> = ({ id, imageUri, title, description, cookingTime }) => {
    const nav = useNavigation();

    const navToRecipeDetail = () => {
        nav.navigate('RecipeDetail', { recipeId: id })
    }

    return (
        <Pressable onPress={navToRecipeDetail}>
            <View style={styles.card}>
                <Image
                    source={{ uri: imageUri }}
                    style={styles.image}
                />
                <View style={styles.description}>
                    <CustomText text={title} style={styles.title} />
                    <View style={styles.cookingTimeBox}>
                        <Ionicons name='timer-outline' color='#282828' size={16}/>
                        <CustomText text={cookingTime} style={styles.subtitle} />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default RecipeCard;

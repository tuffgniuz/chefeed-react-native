import { FC, useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { api } from "../../utils/api";

import { styles } from './styles'

import CustomText from "../UI/CustomText";
import RecipeSmallPreview from "../RecipeSmallPreview";

interface Props {
    userId: string
}

const UserRecipes: FC<Props> = ({ userId }) => {
    const [recipes, setRecipes] = useState(null)

    useEffect(() => {
        (async () => {
            const user = await api(`/api/v1/recipes/users/${userId}`, 'get')
            console.log(userId)
            setRecipes(user.recipes)
        })()
    }, [])

    if (recipes === null) {
        return (
            <View style={styles.container}>
                <CustomText text='Wow, such empy' />
            </View>
        )
    }

    return (
        <>
            <FlatList
                numColumns={3}
                data={recipes}
                renderItem={(data) => (
                    <RecipeSmallPreview
                        imageUrl={data.item.image_url}
                    />
                )}
                keyExtractor={(item) => item._id}
            />
        </>
    )
}

export default UserRecipes;

import { useEffect } from "react";
import { useState } from "react";
import { FlatList } from "react-native";
import { api } from "../../utils/api";

const IngredientList = () => {
    const [ingredients, setIngredients] = useState(null)

    useEffect(() => {
        (async () => {
            const ingredientList = await api('api/v1/ingredients/', 'get');
            setIngredients(ingredientList);
        })()
    }, [])

    return (
        <FlatList
            data={ingredients}
            renderItem={({ item }) => (
                
            )}
            keyExtractor={(item) => item._id}
        />
    )
}

export default IngredientList;

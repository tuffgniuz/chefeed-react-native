import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { fetchRecipes } from '../../utils/api';

import RecipeCard from '../RecipeCard';
import LoadingOverlay from '../UI/LoadingOverlay';

const RecipeList: FC = () => {
    const [recipes, setRecipes] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch('http://192.168.1.6:8000/api/v1/recipes')
            const json = await response.json();
            setFetching(false)
            setRecipes(json)
        }
        getRecipes();
    }, [])

    if (fetching) {
        return <LoadingOverlay />
    }

    return (
        <FlatList
            data={recipes}
            renderItem={(data) => (
                <RecipeCard
                    id={data.item._id}
                    imageUri={data.item.attachment}
                    title={data.item.title}
                    cookingTime={`${data.item.cooking_time} Minutes`}
                />
            )}
            keyExtractor={(item) => item._id}
        />
    )
}

export default RecipeList;

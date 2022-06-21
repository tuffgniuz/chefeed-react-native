import { FC, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import RecipeDetail from "../components/RecipeDetail";
import Container from "../components/UI/Container";
import Title from "../components/UI/Title";

const RecipeDetailScreen: FC<Props> = ({ route }) => {
    const id = route.params.recipeId;
    const [recipe, setRecipe] = useState({
        title: '',
        cookingTime: '',
        description: '',
        imageUri: '',
        ingredients: [],
    })

    useEffect(() => {
        const getResponse = async () => {
            const response = await fetch(`http://192.168.1.6:8000/api/v1/recipes/${id}`)
            const json = await response.json()

            setRecipe({
                title: json.title,
                cookingTime: json.cooking_time,
                description: json.description,
                imageUri: json.attachment,
                ingredients: json.ingredients,
            })
        }
        getResponse();
    }, [])

    return (
        <Container>
            <Image source={{ uri: recipe.imageUri }} style={styles.image}/>
            <Title>{recipe.title}</Title>
        </Container>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 25,
        marginBottom: 15,
        borderRadius: 20,
        width: '100%',
        minHeight: 400,
    },
})

export default RecipeDetailScreen;

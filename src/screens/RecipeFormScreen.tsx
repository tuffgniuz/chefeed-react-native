import { FC, useEffect, useState } from "react"
import RecipeForm from "../components/RecipeForm"
import Container from "../components/UI/Container"

const RecipeFormScreen: FC = () => {
    const [screen, setScreen] = useState(null);
    const screenName = ['Image', 'Ingredients', 'Content']
        
    return (
        <Container>
            <RecipeForm />
        </Container>
    )
}

export default RecipeFormScreen;

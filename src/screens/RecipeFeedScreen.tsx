import { FC, useEffect, useState } from 'react';
import { Text } from 'react-native';

import HomeHeader from '../components/HomeHeader';
import RecipeList from '../components/RecipeList';
import Container from '../components/UI/Container';

const RecipeFeedScreen: FC = () => { 

    return (
        <Container>
            <HomeHeader />
            {/* Horizontal list of categories */}
            <RecipeList />
        </Container>
    );
}

export default RecipeFeedScreen;

import { createContext, useState } from 'react';

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {

    return (
        <RecipeContext.Provider>
            {children}
        </RecipeContext.Provider>
    )
}


export default RecipeProvider;

import { createContext, useState } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {

    return (
        <RecipeContext.Provider>{children}</RecipeContext.Provider>
    )
}


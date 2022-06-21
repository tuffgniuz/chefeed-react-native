import AppStack from './src/navigation/Stack';

import { RecipeProvider } from './src/store/RecipeContext';


const App = () => {
    return (
        <RecipeProvider>
            <AppStack />
        </RecipeProvider>
    )
}

export default App;

import { LogBox } from 'react-native'
import AppStack from './src/navigation/Stack';

import RecipeProvider from './src/store/RecipeContext';
import UserProvider from './src/store/UserContext';

LogBox.ignoreAllLogs(true)


const App = () => {
    return (
        <UserProvider>
            <RecipeProvider>
                <AppStack />
            </RecipeProvider>
        </UserProvider>
    )
}

export default App;

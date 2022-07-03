import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import AuthProvider from './src/context/AuthProvider';
import { useFonts, Mansalva_400Regular } from '@expo-google-fonts/mansalva'

import Tabs from './src/navigation/Tabs';

const App: FC = () => {
    const [fontsLoaded] = useFonts({ 'mansalva': Mansalva_400Regular })

    if (!fontsLoaded) {
        console.log('not loaded')
    }

    return (
        <AuthProvider>
            <NavigationContainer>
                <Tabs />
            </NavigationContainer>
        </AuthProvider>
    );
}

export default App;

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';

import Tabs from './src/navigation/Tabs';

const App: FC = () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
  );
}

export default App;

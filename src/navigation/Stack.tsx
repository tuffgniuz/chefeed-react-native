import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
//
import Tabs from './tabs';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={Tabs}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen 
                    name='RecipeDetail'
                    component={RecipeDetailScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppStack;

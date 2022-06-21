import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { FC } from 'react';
import { StyleSheet } from 'react-native';
import renderIcon from './Icon';

import RecipeFeedScreen from '../screens/RecipeFeedScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import RecipeFormScreen from '../screens/RecipeFormScreen';

const Tab = createBottomTabNavigator();

const Tabs: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="RecipeFeedScreen"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.tabsNav },
            }}>
            {/* HOME SCREEN TAB */}
            <Tab.Screen
                name='Home'
                component={RecipeFeedScreen}
                options={{
                    tabBarIcon: ({ tintColor }) => <Ionicons name='home-sharp' color={tintColor} size={20} />
                }}
            />
            {/* RECIPE CREATE SCREEN */}
            <Tab.Screen
                name='RecipeForm'
                component={RecipeFormScreen}
                options={{
                    headerShown: true,
                }}
            />
            {/* USER PROFILE SCREEN */}
            <Tab.Screen
                name='Profile'
                component={UserProfileScreen}
                options={{
                    tabBarIcon: ({ tintColor }) => <Ionicons name='person-circle-sharp' color={tintColor} size={25} />
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabsNav: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 1,
        borderRadius: 20,
        height: 70,
        borderTopWidth: 0,
    }
})

export default Tabs;

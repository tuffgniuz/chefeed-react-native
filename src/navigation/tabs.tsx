import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { FC, useContext } from 'react';
import { StyleSheet } from 'react-native';
import renderIcon from './Icon';

import RecipeFeedScreen from '../screens/RecipeFeedScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import RecipeFormScreen from '../screens/RecipeFormScreen';
import CameraButton from '../components/CameraButton';
import AuthStack from './AuthStack';
import { UserContext } from '../store/UserContext';
import LogoutButton from '../components/LogoutButton';
import AddButton from '../components/UI/AddButton';

const Tab = createBottomTabNavigator();

const Tabs: FC = () => {
    const { isAuthenticated } = useContext(UserContext)

    return (
        <Tab.Navigator
            initialRouteName="RecipeFeedScreen"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
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
            {isAuthenticated ?
                <>
                    <Tab.Screen
                        name='RecipeForm'
                        component={RecipeFormScreen}
                        options={{
                            headerShown: true,
                            headerRight: () => <CameraButton />,
                            headerTitle: '',
                            headerStyle: {
                                backgroundColor: '#fafafa',
                            },
                            tabBarIcon: (() => <AddButton />)
                        }}
                    />

                    <Tab.Screen
                        name='UserProfileScreen'
                        component={UserProfileScreen}
                        options={{
                            tabBarIcon: ({ tintColor }) => (
                                <Ionicons name='person-circle-sharp' color={tintColor} size={25} />
                            ),
                            headerShown: isAuthenticated ? true : false,
                            headerTitle: '',
                            headerRight: () => <LogoutButton />,
                            headerShadowVisible: false,
                            headerStyle: {
                                backgroundColor: '#fafafa',
                            }
                        }}
                    />
                </>
                :
                <Tab.Screen
                    name='Auth'
                    component={AuthStack}
                />
            }

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabsNav: {
        // position: 'absolute',
        // bottom: 0,
        // // left: 20,
        // right: 20,
        elevation: 0,
        // borderRadius: 20,
        height: 70,
        borderTopWidth: 0,
        backgroundColor: '#fafafa',
    }
})

export default Tabs;

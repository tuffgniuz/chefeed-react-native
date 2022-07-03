import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthProvider';
import Feather from '@expo/vector-icons/Feather'

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import UserProfileScreen from '../screens/UserProfileScreen';
import Logo from '../components/UI/Logo';
import { globalStyles } from '../styles/global';
import LogoutButton from '../components/UI/LogoutButton';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <Tab.Navigator
            screenOptions={{
                // headerShown: false,
                tabBarStyle: { ...styles.bottomTabs },
                tabBarShowLabel: false,
                headerTitle: 'Chefeed',
                headerTitleStyle: { ...globalStyles.logo },
                headerStyle: { ...styles.header },
                headerRight: () => <LogoutButton />
            }}
        >
            <Tab.Screen
                name='AppStack'
                component={AppStack}
                options={{
                    tabBarIcon: () => <Feather name='home' size={24} />
                }}
            />
            {currentUser === null ?
                <Tab.Screen
                    name='Auth'
                    component={AuthStack}
                    options={{
                        tabBarIcon: () => <Feather name='log-in' size={24} />
                    }}
                />
                :
                <Tab.Screen
                    name='UserProfile'
                    component={UserProfileScreen}
                    options={{
                        tabBarIcon: () => <Feather name='user' size={24} />
                    }}
                />
            }
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 12,
    },
    header: {
        backgroundColor: '#fafafa',
    },
    bottomTabs: {
        bottom: 10,
        borderTopWidth: 0,
        elevation: 0,
        backgroundColor: '#fafafa'
    }
})

export default Tabs;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='AppStack'
                component={AppStack}
            />
            <Tab.Screen
                name='Auth'
                component={AuthStack}
            />
        </Tab.Navigator>
    )
}

export default Tabs;

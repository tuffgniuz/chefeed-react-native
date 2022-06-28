import { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from "../screens/SignUpScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterSuccessScreen from "../screens/RegisterSuccessScreen";

const Stack = createNativeStackNavigator();

const AuthStack: FC = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='RegisterSuccess' component={RegisterSuccessScreen} />
        </Stack.Navigator>
    )
} 

export default AuthStack;

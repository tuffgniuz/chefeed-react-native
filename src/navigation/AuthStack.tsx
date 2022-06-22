import { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignUp' component={'SignUpScreen'} />
            <Stack.Screen name='LoginScreen' component={'LoginScreen'} />
        </Stack.Navigator>
    )
} 

export default AuthStack;

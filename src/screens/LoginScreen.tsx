import { NavigationProp } from "@react-navigation/native";
import { FC, useContext, useState } from "react";
import { StyleSheet } from "react-native";
import Brand from "../components/UI/Brand";
import Button from "../components/UI/Button"
import Container from "../components/UI/Container"
import CustomInput from "../components/UI/CustomInput";
import CustomText from "../components/UI/CustomText";
import { UserContext } from "../store/UserContext";
import { authenticateUser } from "../utils/api";
import { storeAccessToken } from "../utils/storage";
import SignUpScreen from "./SignUpScreen";
import UserProfileScreen from "./UserProfileScreen";

interface Props {
    navigation: any
}

const LoginScreen: FC<Props> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const toRegisterScreen = () => {
        navigation.replace('SignUp')
    }

    const AuthenticateOnPress = async () => {
        await authenticateUser(email, password);
        navigation.navigate(UserProfileScreen)
    }

    return (
        <Container>
            <Brand />
            <CustomInput
                label='email'
                options={{
                    autoCapitalize: 'none',
                    onChangeText: (text: string) => setEmail(text)
                }}
            />
            <CustomInput
                label='password'
                options={{
                    secureTextEntry: true,
                    onChangeText: (text: string) => setPassword(text)
                }}
            />
            <Button text='Login' onPress={AuthenticateOnPress} />
            <Button
                text='No account yet? Signup'
                btnStyle={styles.btn}
                style={styles.text}
                onPress={toRegisterScreen}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderWidth: 1,
        borderColor: '#59c493',
        backgroundColor: '#fff',
    },
    text: {
        color: '#59c493',
        fontSize: 12,
    }
})

export default LoginScreen;

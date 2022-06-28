import { NavigationProp } from "@react-navigation/native";
import { FC } from "react";
import { StyleSheet } from "react-native";
import Brand from "../components/UI/Brand";
import Button from "../components/UI/Button"
import Container from "../components/UI/Container"
import CustomInput from "../components/UI/CustomInput";
import SignUpScreen from "./SignUpScreen";

interface Props {
    navigation: any
}

const LoginScreen: FC<Props> = ({ navigation }) => {
    const toRegisterScreen = () => {
        navigation.replace('SignUp')
    }

    const AuthenticateOnPress = () => {
        console.log('authenticate')
    }

    return (
        <Container>
            <Brand />
            <CustomInput label='email' />
            <CustomInput
                label='password'
                options={{
                    secureTextEntry: true
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

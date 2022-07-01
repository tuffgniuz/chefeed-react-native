import { useNavigation } from "@react-navigation/native";
import { FC, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { createUser } from "../utils/api";
import Brand from "../components/UI/Brand";
import Button from "../components/UI/Button";
import Container from "../components/UI/Container";
import CustomInput from "../components/UI/CustomInput";
import CustomText from "../components/UI/CustomText";

const SignUpScreen: FC = ({ navigation }) => {
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navToLogin = () => {
        navigation.replace('LoginScreen')
    }

    const signUpOnPress = async () => {
        setIsSigningUp(true)
        await createUser(name, email, password);
        setIsSigningUp(false);
        setName('')
        setEmail('');
        setPassword('')
        navigation.navigate('RegisterSuccess')
    }

    return (
        <Container>
            <Brand />
            <CustomInput
                label='name'
                options={{
                    value: name,
                    onChangeText: (text: string) => setName(text)
                }}
            />
            <CustomInput
                label='email'
                options={{
                    autoCapitalize: 'none',
                    value: email,
                    onChangeText: (text: string) => setEmail(text)
                }}
            />
            <CustomInput
                label='password'
                options={{
                    value: password,
                    onChangeText: (text: string) => setPassword(text),
                    secureTextEntry: true,
                }}
            />
            {/* <CustomInput label='confirm password' /> */}
            <Button text='Sign up' onPress={signUpOnPress} />
            <Button
                text='Already have an account? Login'
                btnStyle={styles.btn}
                style={styles.text}
                onPress={navToLogin}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    helpText: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignContent: 'center',
    },
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

export default SignUpScreen;

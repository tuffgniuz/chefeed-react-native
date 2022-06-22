import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { StyleSheet, View } from "react-native";

import Brand from "../components/UI/Brand";
import Button from "../components/UI/Button";
import Container from "../components/UI/Container";
import CustomInput from "../components/UI/CustomInput";
import CustomText from "../components/UI/CustomText";
import Title from "../components/UI/Title";
import LoginScreen from "./LoginScreen";

const SignUpScreen: FC = () => {
    const nav = useNavigation()

    const navToLogin = () => {
        nav.navigate(LoginScreen)
    }

    const confirmOnPress = () => {
        console.log('signup')
    }

    return (
        <Container>
            <Brand />
            <CustomInput label='name' />
            <CustomInput label='email' />
            <CustomInput label='password' />
            <CustomInput label='confirm password' />
            <Button text='Sign up' onPress={confirmOnPress} />
            <Button text='Login' style={styles.btn} onPress={navToLogin} />
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
        backgroundColor: 'transparent',
    }
})

export default SignUpScreen;

import { Formik } from "formik"
import { useState } from "react"
import { StyleSheet } from "react-native"
import * as yup from 'yup'
import Button from "../components/UI/Button"

import Container from "../components/UI/Container"
import FormInput from "../components/UI/FormInput"
import { authenticate } from "../utils/requests"
import SignupScreen from "./SignupScreen"
import UserProfileScreen from "./UserProfileScreen"

const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email').required('Email address is required'),
    password: yup.string().min(12, ({ min }) => `Password must be at least ${min} charachters`).required('Password is required'),
})

const LoginScreen = ({ navigation }) => {

    const navigationHandler = () => {
        navigation.navigate('Signup')
    }

    return (
        <Container>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={({ email, password }) => {
                    authenticate(email, password);
                    navigation.navigate('Home')
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <FormInput
                            label='Email'
                            onChangeText={handleChange('email')}
                            value={values.email}
                        />
                        <FormInput
                            label='Password'
                            onChangeText={handleChange('password')}
                            value={values.password}
                            options={{
                                secureTextEntry: true,
                            }}
                        />
                        <Button text='Login' onPress={handleSubmit} />
                        <Button text='Register' btnStyle={styles.btn} onPress={navigationHandler} />
                    </>
                )}
            </Formik>
        </Container>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'transparent',
    }
})

export default LoginScreen;

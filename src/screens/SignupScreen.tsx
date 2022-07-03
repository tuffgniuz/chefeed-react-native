import { Formik } from "formik";
import { FC } from "react";
import { StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import Container from "../components/UI/Container";
import FormInput from "../components/UI/FormInput";
import { fetchCF } from "../utils/requests";

const SignupScreen: FC = ({ navigation }) => {
    const navigationHandler = () => {
        navigation.navigate('Login')
    }

    return (
        <Container>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={({ name, email, password }) => {
                    const data = {
                        'name': name,
                        'email': email,
                        'password': password,
                    }
                    fetchCF('post', '/auth/register', data)
                }}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <FormInput
                            label='Name'
                            onChangeText={handleChange('name')}
                            value={values.name}
                        />
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
                                secureTextEntry: true
                            }}
                        />
                        <Button text='Register' onPress={handleSubmit} />
                        <Button
                            text='Login'
                            onPress={navigationHandler}
                            btnStyle={styles.btn}
                        />
                    </>
                )}
            </Formik>
        </Container>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'transparent'
    }
})

export default SignupScreen;

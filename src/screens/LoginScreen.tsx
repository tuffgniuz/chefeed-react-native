import Button from "../components/UI/Button"
import Container from "../components/UI/Container"

const LoginScreen = () => {
    return (
        <Container>
            <Brand />
            <CustomInput label='email' />
            <CustomInput label='password' />
            <Button text='Login' />
        </Container>
    )
}

export default LoginScreen;

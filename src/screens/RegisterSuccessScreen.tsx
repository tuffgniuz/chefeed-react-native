import { FC } from "react";
import { StyleSheet } from "react-native";
import Brand from "../components/UI/Brand";
import Button from "../components/UI/Button";
import Container from "../components/UI/Container";
import CustomText from "../components/UI/CustomText";

interface Props {
    name: string,
    mail: string
}

const RegisterSuccessScreen: FC<Props> = ({ name, mail, navigation }) => {
    const toLoginScreen = () => {
        navigation.navigate('LoginScreen')
    } 

    return (
        <Container style={styles.container}>
            <Brand />
            <CustomText text={`Hi ${name}, please confirm your email we send at ${mail}`} />
            <Button text='Login' onPress={toLoginScreen} />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        
        // flex: 1,
        justifyContent: 'space-between',
        // alignSelf: 'center',
    }
})

export default RegisterSuccessScreen;

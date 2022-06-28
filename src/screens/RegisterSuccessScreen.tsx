import { FC } from "react";
import { StyleSheet } from "react-native";
import Container from "../components/UI/Container";
import CustomText from "../components/UI/CustomText";

interface Props {
    name: string,
    mail: string
}

const RegisterSuccessScreen: FC<Props> = ({ name, mail }) => {
    return (
        <Container style={styles.container}>
            <CustomText text={`Hi ${name}, please confirm your email we send at ${mail}`} />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
    }
})

export default RegisterSuccessScreen;

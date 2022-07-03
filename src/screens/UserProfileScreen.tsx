import { FC } from "react";
import { StyleSheet } from "react-native";
import Container from "../components/UI/Container";
import ProfileHeader from "../components/UI/ProfileHeader";

const UserProfileScreen: FC = () => {
    return (
        <Container>
            <ProfileHeader />
            {/* Recipes */}
        </Container>
    )
}

const styles = StyleSheet.create({

})

export default UserProfileScreen;

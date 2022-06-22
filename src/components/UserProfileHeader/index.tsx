import { FC } from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

import Title from "../UI/Title";
import UserDetailDisplay from "../UserDetailDisplay";

const UserProfileHeader: FC = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://robohash.org/sun tzu' }}
                style={styles.userImage}
            />
            <Title style={styles.username}>Sun Tzu</Title>
            <UserDetailDisplay />
        </View>
    )
}

export default UserProfileHeader

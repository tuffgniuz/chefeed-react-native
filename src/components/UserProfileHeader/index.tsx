import { FC, useEffect, useState } from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import axios from "axios";

import { api, authorizationBearer } from "../../utils/api";

import Title from "../UI/Title";
import UserDetailDisplay from "../UserDetailDisplay";

const UserProfileHeader: FC = () => {
    const [name, setName] = useState(null)
    const [avatar, setAvatar] = useState('https://robohash.org/sun tzu')

    useEffect(() => {
       (async () => {
            const token = await authorizationBearer()
            const user = await api('/users/me', 'get', token)

            setName(user.name)
            setAvatar(user.avatar_url)
       }) ()
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: avatar }}
                style={styles.userImage}
            />
            <Title style={styles.username}>{name}</Title>
            <UserDetailDisplay />
        </View>
    )
}

export default UserProfileHeader

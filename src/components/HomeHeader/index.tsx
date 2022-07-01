import { FC, useContext, useEffect, useState } from "react";
import { Image, View } from "react-native";
import { UserContext } from "../../store/UserContext";
import { api, authorizationBearer } from "../../utils/api";
import SearchBar from "../SearchBar";

import CustomText from "../UI/CustomText";
import Title from "../UI/Title";

import styles from './styles';

// interface Props {
//     greeting?: string
// }

const HomeHeader = () => {
    const [name, setName] = useState(null)
    const [avatar, setAvatar] = useState('https://robohash.org/sun tzu')
    const { isAuthenticated } = useContext(UserContext)

    useEffect(() => {
        (async () => {
            const token = await authorizationBearer();
            const user = await api('/users/me', 'get', token);

            setName(user.name)
            setAvatar(user.avatar_url)
        })()
    }, [])

    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.greeting}>
                    <Title>Hi, {isAuthenticated ? name : 'Stranger'}</Title>
                    <CustomText text='What would you like to eat?' style={styles.subheading} />
                    {/* <Subtitle>What would you like to eat?</Subtitle> */}
                </View>
                <Image source={{ uri: avatar }} style={styles.img} />
            </View >
            <SearchBar />
        </>
    )
}

export default HomeHeader;

import { FC, useContext, useEffect, useState } from "react"
import { Image, StyleSheet, View } from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import { fetchCF } from "../../utils/requests"
import Title from "./Title"

interface Props {
    id?: string
}

const ProfileHeader: FC<Props> = () => {
    const { currentUser } = useContext(AuthContext)
    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     (async () => {
    //         const user = await fetchCF('get', `/users/${id}`)
    //         setUser(user)
    //     })()
    // }, [user])

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: currentUser.avatar_url }} 
                style={styles.image}
            />
            <Title>{currentUser.name}</Title>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth:1,
        borderColor: '#282828',
        marginBottom: 20,
    }
})

export default ProfileHeader;

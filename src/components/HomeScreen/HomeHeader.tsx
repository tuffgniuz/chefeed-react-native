import { useContext } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { AuthContext } from "../../context/AuthProvider"
import Title from "../UI/Title"

const HomeHeader = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={styles.greeter}>
                <Title>Hi, {currentUser.name}</Title>
                <Text>What would you like to eat?</Text>
            </View>
            <Image source={{ uri: currentUser.avatar_url }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    greeter: {
        alignContent: 'space-between'
    },
    image: {
        width: 50,
        height: 50,
        borderColor: '#282828',
        borderWidth: 1,
        borderRadius: 100,
    }
})

export default HomeHeader;

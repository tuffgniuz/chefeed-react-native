import { useContext } from "react"
import { UserContext } from "../../store/UserContext"
import { api, authorizationBearer } from "../../utils/api"
import * as SecureStore from 'expo-secure-store'

import Button from "../UI/Button"
import { StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const LogoutButton = () => {
    const navigation = useNavigation()
    const { onLogout } = useContext(UserContext);

    const onPressLogout = async () => {
        const token = await authorizationBearer()
        await api('/auth/logout', 'post', token)   
        onLogout()
        await SecureStore.deleteItemAsync('bearer') 
        navigation.navigate('LoginScreen')
    }

    return (
        <Button 
            text='Logout'
            onPress={onPressLogout}
            btnStyle={styles.btn}
        />
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'transparent',
        height: 100
    }
})

export default LogoutButton;

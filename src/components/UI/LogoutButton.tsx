import Feather from '@expo/vector-icons/Feather';
import { useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthProvider';
import { logout } from '../../utils/requests';

const LogoutButton = () => {
    const { currentUser, onLogout } = useContext(AuthContext)

    const logoutHandler = async () => {
        logout();
        onLogout()
    }

    if (currentUser === null) {
        return null
    }

    return (
        <Pressable onPress={logoutHandler} style={styles.btn}>
            <Feather name='log-out' size={22} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        right: 20,
    }
})

export default LogoutButton;

import { Pressable, StyleSheet, View } from "react-native"
import Ionicon from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

const CameraButton = () => {
    const nav = useNavigation()

    const openCameraOnPress = () => {
        nav.navigate('CameraScreen')
    }

    return (
        <Pressable onPress={openCameraOnPress}>
            <View style={styles.btn}>
            <Ionicon name='camera-outline' size={25}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignContent: 'center',
        right: 25,
    }
})

export default CameraButton;

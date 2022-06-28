import { useEffect, useState } from "react";
import { Camera, CameraType } from 'expo-camera';
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomText from "../components/UI/CustomText";


const CameraScreen = () => {
    const [hasPermission, setHasPermission] = useState(null)
    const [camera, setCamera] = useState(null)
    const [image, setImage] = useState(null)
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const setCameraType = () => {
        setType(type === CameraType.back ? CameraType.front : CameraType.back);
    }

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null)
            setImage(data.uri)
        }
    }

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <CustomText>No access to camera</CustomText>
    }

    return (
        <>
            <Camera
                ref={ref => setCamera(ref)}
                style={styles.camera}
                type={type}
                ratio='16:9'
            />
            <TouchableOpacity
                style={styles.typeBtn}
                onPress={setCameraType}
            >
                <Ionicons name='sync-outline' size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture} style={styles.btn} />
        </>
    )
}


export const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    typeBtn: {
        position: 'absolute',
        left: 65,
        bottom: 60,
    },
    btn: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 40,
        height: 80,
        width: 80,
        borderRadius: 100,
        borderWidth: 7,
        borderColor: '#fb4943',
        backgroundColor: '#cc251d',
        elevation: 10,
    }
})

export default CameraScreen;

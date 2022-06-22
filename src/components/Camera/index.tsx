import { useEffect, useState } from "react";
import { Camera, CameraType } from 'expo-camera';
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from './styles';
import CustomText from "../UI/CustomText";


const Cam = () => {
    const [hasPermission, setHasPermission] = useState(null)
    const [camera, setCamera] = useState(null)
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
            console.log(data.uri)
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

export default Cam;

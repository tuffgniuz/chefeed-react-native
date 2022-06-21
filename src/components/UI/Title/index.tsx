import { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Staatliches_400Regular } from '@expo-google-fonts/staatliches'

const Title: FC = ({ children }) => {
    let [fontsLoaded] = useFonts({ 
        'staatliches': Staatliches_400Regular,
    })
    
    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (<Text style={styles.title}>{ children }</Text>);
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'staatliches',
        fontSize: 26,
        color: '#59c493',
        marginBottom: 5,
        textTransform: 'uppercase'
    }
})

export default Title;

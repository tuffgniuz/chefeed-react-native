import { FC } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native"

const Container: FC = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 16,
        backgroundColor: '#fafafa',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default Container;

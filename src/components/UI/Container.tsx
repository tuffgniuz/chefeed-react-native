import { FC } from "react";
import { SafeAreaView, StyleSheet } from "react-native"

const Container: FC = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Container;
import { FC } from "react"
import { StyleSheet, Text } from "react-native"

const Heading: FC = ({ children }) => (<Text style={styles.heading}>{children}</Text>)

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
    }
})

export default Heading;

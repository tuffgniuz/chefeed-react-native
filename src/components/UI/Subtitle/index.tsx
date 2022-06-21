import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import {  }

const Subtitle: FC = ({ children }) => <Text style={styles.subtitle}>{ children }</Text>

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
        color: '#282828',
    }
})

export default Subtitle;

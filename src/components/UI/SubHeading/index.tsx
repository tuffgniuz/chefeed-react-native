import { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
    title: string
}

const SubHeading: FC<Props> = ({ title }) => ( <Text style={styles.subHeading}>{ title }</Text> )

const styles = StyleSheet.create({
    subHeading: {
    }
})

export default SubHeading;

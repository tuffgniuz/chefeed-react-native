import { FC } from "react";
import { StyleSheet, Text, TextInput } from "react-native";

interface Props {
    label: string,
    placeholder?: string,
    onChangeText: any,
    value: string,
    options: {}
}

const FormInput: FC<Props> = ({ label, placeholder, onChangeText, value, options }) => {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                {...options}
            />
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        marginBottom: 5,   
    },
    input: {
        borderRadius: 10,
        padding: 5,
        marginBottom: 15,
        backgroundColor: '#f4f4f4'
    }
})

export default FormInput;

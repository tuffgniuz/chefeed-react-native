import { View } from "react-native"

interface Props {
    label: string,
}

const PasswordInput = () => {
    return (
        <View>
            <CustomText text={label} style{styles.label} />
            <TextInput 
                style={styles.inputStyles} 
                secureTextEntry
            />
        </View>
    )
}

import { FC, useState } from "react";
import { View } from "react-native";

import Button from "../UI/Button";
import CustomInput from "../UI/CustomInput";

interface Props {
    title: string,
    descriptiong: string,
    imageUrl: string,
    cookingTime: number
}

const RecipeForm: FC<Props> = ({ title, description, imageUrl, cookingTime }) => {
    // useNavigation
    const [inputValues, setInputValues] = useState({
        title: '',
        description: '',
        cookingTime: '',
    })

    const onInputChangeSubmit = (inputIdentifier, inputValue) => {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: inputValue
            }
        })
    }

    const confirmOnPress = () => {
        const recipe = {
            title: inputValues.title,
            description: inputValues.description,
            cookingTime: +inputValues.cookingTime
        };
    };

    return (
        <>
            <View>
            </View>
            <CustomInput
                label='Title'
                options={{
                    onChangeText: onInputChangeSubmit.bind(this, 'title'),
                    value: inputValues.title,
                }}
            />
            <CustomInput
                label='Cooking time'
                options={{
                    keyboardType: 'number-pad',
                    // placeholder: 'Cookin in minutes',
                    onchangeText: onInputChangeSubmit.bind(this, 'cookingTime'),
                    value: inputValues.cookingTime,
                }}
            />
            <CustomInput
                label='Description'
                options={{
                    multiline: true,
                    placeholder: 'Tell something about your recipe',
                    onChangeText: onInputChangeSubmit.bind(this, 'description'),
                    value: inputValues.description,
                }}
            />
            <Button text='Post' onPress={confirmOnPress} />
        </>
    )
}

export default RecipeForm;

import { FC } from 'react';
import { Pressable, View } from 'react-native';
import CustomText from '../UI/CustomText';
import { styles } from './styles';

interface Props {
    name: string
}

const CategoryItem: FC<Props> = ({ name }) => {
    const onPressFilterCategory = () => {
        console.log('hi')
    }

    return (
        <Pressable onPress={onPressFilterCategory}>
            <View style={styles.container}>
                <CustomText text={name} style={styles.text}/>
            </View>
        </Pressable>
    )
}

export default CategoryItem;

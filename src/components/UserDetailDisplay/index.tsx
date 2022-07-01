import { FC } from "react";
import { View } from "react-native";
import CustomText from "../UI/CustomText";
import Title from "../UI/Title";
import { styles } from './styles';

interface Props {
    followers: string,
    following: string,
    recipes: string
}

const UserDetailDisplay: FC = ({ followers, following, recipes }) => {
    return (
        <View style={styles.container}>
            <View style={styles.displayBox}>
                <Title>{followers}</Title>
                <CustomText 
                    style={styles.text} 
                    text='Followers'
                />
            </View>
            <View style={styles.displayBox}>
                <Title>{following}</Title>
                <CustomText 
                    style={styles.text} 
                    text='Following' 
                />
            </View>
            <View style={styles.displayBox}>
                <Title>{recipes}</Title>
                <CustomText 
                    style={styles.text} 
                    text='Recipes'
                />
            </View>
        </View>
    )
}

export default UserDetailDisplay;

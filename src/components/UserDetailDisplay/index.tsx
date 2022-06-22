import { FC } from "react";
import { View } from "react-native";
import CustomText from "../UI/CustomText";
import Title from "../UI/Title";
import { styles } from './styles';

const UserDetailDisplay: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.displayBox}>
                <Title>1000</Title>
                <CustomText 
                    style={styles.text} 
                    text='Followers'
                />
            </View>
            <View style={styles.displayBox}>
                <Title>1000</Title>
                <CustomText 
                    style={styles.text} 
                    text='Following' 
                />
            </View>
            <View style={styles.displayBox}>
                <Title>80</Title>
                <CustomText 
                    style={styles.text} 
                    text='Recipes'
                />
            </View>
        </View>
    )
}

export default UserDetailDisplay;

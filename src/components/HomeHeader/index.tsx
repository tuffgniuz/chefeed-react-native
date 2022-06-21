import { FC } from "react";
import { Image, View } from "react-native";
import SearchBar from "../SearchBar";

import CustomText from "../UI/CustomText";
import Title from "../UI/Title";

import styles from './styles';

interface Props {
    greeting?: string
}

const HomeHeader: FC<Props> = ({ greeting }) => {
    return (
        <>
            <View style={styles.headerContainer}>
                <View style={styles.greeting}>
                    <Title>Hi, Sun Tzu</Title>
                    <CustomText text='What would you like to eat?' style={styles.subheading} />
                    {/* <Subtitle>What would you like to eat?</Subtitle> */}
                </View>
                <Image source={{ uri: 'https://robohash.org/sun tzu' }} style={styles.img} />
            </View >
            <SearchBar />
        </>
    )
}

export default HomeHeader;

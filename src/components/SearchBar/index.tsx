import { FC } from "react";
import { TextInput } from "react-native";

import { styles } from './styles';

const SearchBar: FC = () => {
    return (
        <TextInput 
            placeholder='French toast ..' 
            style={styles.input}
        />
    ) 
}

export default SearchBar;

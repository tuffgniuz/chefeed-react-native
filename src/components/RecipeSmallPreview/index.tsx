import { FC } from "react"
import { Image, View } from "react-native"
import { styles } from "./styles";

interface Props {
    imageUrl: string
}

const RecipeSmallPreview: FC<Props> = ({ imageUrl }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.img} />
        </View>
    )
}

export default RecipeSmallPreview;

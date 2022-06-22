import { useEffect, useState } from "react";
import { FlatList } from "react-native"
import { styles } from './styles';

import CategoryItem from "../CategoryItem";
import LoadingOverlay from "../UI/LoadingOverlay";

const CategoryList: FC = () => {
    const [categories, setCategories] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        (async () => {
            const response = await fetch('http://192.168.1.6:8000/api/v1/categories/');
            const json = await response.json()
            setFetching(false) 
            setCategories(json)
        })()
    }, [])
    
    if (fetching) {
        return <LoadingOverlay />
    }

    return (
        <FlatList
            horizontal={true}
            data={categories}
            keyExtractor={(item) => item._id}
            renderItem={(data) => <CategoryItem name={data.item.category_name} />}
        />
    )
}

export default CategoryList;


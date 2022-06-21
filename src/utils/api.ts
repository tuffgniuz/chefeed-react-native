import axios from "axios"

const API = 'http://192.168.1.6:8000/api/v1/'

export const fetchRecipes = async () => {
    const response = await axios.get(`${API}/recipes/`)
    

}

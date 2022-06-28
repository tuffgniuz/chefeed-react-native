import axios from "axios"

export const API = 'http://192.168.1.6:8000/api/v1'
export const AUTH = 'http://192.168.1.6:8000/auth'

export const fetchRecipes = async () => {
    const response = await axios.get(`${API}/recipes/`)
}

export const createUser = async (name, email, password) => {
   const response = await axios.post(
        `${AUTH}/register`, 
        {
            name: name,
            email: email,
            password: password,
        }
    ) 
}


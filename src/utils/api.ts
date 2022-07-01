import axios from "axios"
import qs from 'qs'
import { getAccessToken, storeAccessToken } from "./storage"

export const baseURL = 'http://192.168.1.6:8000'
export const AUTH = 'http://192.168.1.6:8000/auth'

export const fetchRecipes = async () => {
    const response = await axios.get(`${baseURL}/api/v1/recipes/`)
}

export const createUser = async (name: string, email: string, password: string) => {
    await axios.post(
        `${AUTH}/register`,
        {
            name: name,
            email: email,
            password: password
        }
    )
}

export const authenticateUser = async (username: string, password: string) => {
    const url = `${AUTH}/login`
    const data = { username: username, password: password }
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url
    }
    const response = await axios(options)

    const token = await response.data.access_token
        
    console.log(token)

    storeAccessToken('bearer', token)
}

export const authorizationBearer = async () => {
    const headers = {}
    const token = await getAccessToken('bearer')

    if (token) {
        headers['Authorization'] = `Bearer ${token}`    
    }

    return headers
}

export const api = async (url:string, method: string, headers?: {}) => {
    const options = {
        method: method,
        headers: headers,
        url: `${baseURL}${url}`
    }
    const response = await axios(options)

    return response.data
}



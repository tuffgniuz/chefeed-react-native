import axios from 'axios'
import qs from 'qs'
import { deleteItem, getItemFor, saveItem } from './storage'

const HOST = '192.168.1.6'//process.env.HOST
const PORT = '8000'//process.env.PORT

const baseUrl = `http://${HOST}:${PORT}`

export const fetchCF = async (method: string, url: string, data?: {}) => {
    const options = {
        method: method,
        data: data,
        url: `${baseUrl}${url}`
    }

    const response = await axios(options)

    return response.data
}

export const authenticate = async (username: string, password: string) => {
    const headers = { 'content-type': 'application/x-www-form-urlencoded' }
    const data = { username: username, password: password }
    const options = {
        method: 'post',
        headers: headers,
        data: qs.stringify(data),
        url: `${baseUrl}/auth/login`
    }
    const response = await axios(options)

    saveItem('accessToken', response.data.access_token)
}

export const authorize = async (method: string, url: string, data?: {}) => {
    const token = await getItemFor('accessToken')


    const options = {
        method: method,
        headers: { 'Authorization': `Bearer ${token}`},
        url: `${baseUrl}${url}`,
        data: qs.stringify(data)
    }

    const response = await axios(options)

    return response.data
}

export const logout = async () => {
    const response = await authorize('post', '/auth/logout')
    deleteItem('accessToken')

    return response.data
}

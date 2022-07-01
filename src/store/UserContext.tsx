import { createContext, useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import { api, authorizationBearer } from "../utils/api";
import { getAccessToken } from "../utils/storage";

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        (async () => {
            const token = await getAccessToken('bearer')

            if (token) {
                const user = await api('/users/me', 'get', token)
                setCurrentUser(user)
                setIsAuthenticated(true)
            }
            console.log(currentUser)
            console.log(token)
        })()
    }, [isAuthenticated, currentUser])


    return (
        <UserContext.Provider value={{ currentUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

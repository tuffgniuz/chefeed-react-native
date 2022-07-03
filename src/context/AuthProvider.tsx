import { createContext, useEffect, useState } from 'react';
import { authorize } from '../utils/requests';
import { getItemFor } from '../utils/storage';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        (async () => {
            const token = await getItemFor('accessToken')

            if (token) {
                const user = await authorize('get', '/users/me')
                setCurrentUser(user)
            }
        }) ()
    }, [currentUser])

    const onLogout = () => {
        setCurrentUser(null)
    }

    return (
        <AuthContext.Provider value={{ currentUser, onLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

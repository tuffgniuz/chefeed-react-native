import { createContext } from "react";

export const UserContext = createContext({
    user: null,
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
})

const UserContextProvider = ({ children }) => {

    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

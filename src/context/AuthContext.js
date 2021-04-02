import React, {createContext, useState} from 'react';



export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [loggedInState, setLoggedInState] = useState(Boolean(localStorage.getItem('login')))


    const authValues ={
        loggedInState,
        setLoggedInState
    }

    return (
        <AuthContext.Provider value={authValues}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;
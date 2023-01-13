import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = function ({ children }) {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = async function (inputs) {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', inputs, {
                withCredentials: true,
            });
            await setCurrentUser(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    }, [currentUser]);
    return <AuthContext.Provider value={{ login, currentUser }}>{children}</AuthContext.Provider>;
};

export { AuthContext };
export default AuthProvider;

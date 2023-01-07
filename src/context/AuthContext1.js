import { createContext, useContext, useEffect, useState } from "react"
import React from 'react'
import auth  from "../firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const registerUser = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const value = {
        currentUser, 
        registerUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext)
}


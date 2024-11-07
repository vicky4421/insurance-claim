'use client'

import { createContext, useContext, useState } from "react"

type Auth = {
    isLoggedIn: boolean,
    setIsLoggedIn: (value: boolean) => void
}

const defaultAuth: Auth = {
    isLoggedIn: false,
    setIsLoggedIn: () => { }
}

const AuthContext = createContext<Auth>(defaultAuth)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
'use client'

import { createContext, useContext } from "react"

type Auth = {
    isLoggedIn: boolean
}

const defaultAuth: Auth = {
    isLoggedIn: false
}

const AuthContext = createContext<Auth>(defaultAuth)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthContext.Provider value={defaultAuth}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
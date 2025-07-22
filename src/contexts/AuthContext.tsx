import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    isLoading: boolean;
    user;
    login: () => void;
    logout: () => void;
}

interface User {
    id: number
    name: string
    role: "admin" | "dev" | "mkt" | "operation"
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: React.ReactNode}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null)
    const login=()=>{}
    const logout=()=>{}
    return (
        <AuthContext.Provider value={{isLoggedIn, isLoading,user, login, logout}}>
        {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error('useAuth must be used within an AuthProvider')
    }    
    return context;
}
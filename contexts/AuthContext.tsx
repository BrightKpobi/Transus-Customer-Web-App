'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { toast } from 'sonner'

interface User {
    email: string
    name?: string
}

interface AuthContextType {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    login: (email: string, password: string) => Promise<boolean>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // Check for existing session on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('transus_user')
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch {
                localStorage.removeItem('transus_user')
            }
        }
        setIsLoading(false)
    }, [])

    const login = async (email: string, password: string): Promise<boolean> => {
        // 🔐 Replace with real API call
        // For demo purposes, accept any email/password
        if (email && password) {
            const userData: User = { email, name: email.split('@')[0] }
            setUser(userData)
            localStorage.setItem('transus_user', JSON.stringify(userData))
            toast.success(`Welcome back${userData.name ? `, ${userData.name}` : ''}!`)
            return true
        }
        toast.error('Please enter a valid email and password')
        return false
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('transus_user')
        toast.success('You have been logged out')
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                isLoading,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

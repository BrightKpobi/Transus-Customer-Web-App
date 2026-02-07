"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    React.useEffect(() => {
        // Clear any stale theme preference on first load to ensure light mode default
        const storedTheme = localStorage.getItem('theme')
        if (!storedTheme) {
            localStorage.setItem('theme', 'light')
        }
    }, [])
    
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export function ThemeProviderWrapper({ children }: Props) {
    return (
        <ThemeProvider
            attribute="class"       // uses 'class' for Tailwind dark: support
            defaultTheme="light"    // default theme
            enableSystem={true}     // allows system theme
        >
            {children}
        </ThemeProvider>
    )
}

"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="h-9 w-[110px] bg-muted/50 animate-pulse rounded-full" />

    const options = [
        { id: "light", icon: Sun, label: "Light" },
        { id: "dark", icon: Moon, label: "Dark" },
        { id: "system", icon: Monitor, label: "System" },
    ]

    return (
        <div className="flex p-1 bg-secondary/50 backdrop-blur-md rounded-full border border-border w-fit relative">
            {options.map((option) => {
                const isActive = theme === option.id
                const Icon = option.icon

                return (
                    <button
                        key={option.id}
                        onClick={() => setTheme(option.id)}
                        className={`relative z-10 flex items-center justify-center h-8 w-8 rounded-full transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            }`}
                    >
                        <Icon className="h-[1.1rem] w-[1.1rem]" />

                        {isActive && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-background rounded-full shadow-sm"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}

                        <span className="sr-only">{option.label}</span>
                    </button>
                )
            })}
        </div>
    )
}
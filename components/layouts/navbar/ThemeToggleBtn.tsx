"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="h-24 w-full bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl" />

    const options = [
        { id: "light", icon: Sun, label: "Light" },
        { id: "dark", icon: Moon, label: "Dark" },
        { id: "system", icon: Monitor, label: "System" },
    ]

    return (
        <div className="grid grid-cols-3 gap-3 w-full">
            {options.map((option) => {
                const isActive = theme === option.id
                const Icon = option.icon

                return (
                    <button
                        key={option.id}
                        onClick={() => setTheme(option.id)}
                        className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${isActive
                                ? "border-black dark:border-white bg-white dark:bg-gray-800 shadow-sm ring-1 ring-black dark:ring-white"
                                : "border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-500 text-gray-500"
                            }`}
                    >
                        <Icon size={20} className={isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-500"} />
                        <span className={`text-xs font-semibold ${isActive ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>
                            {option.label}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
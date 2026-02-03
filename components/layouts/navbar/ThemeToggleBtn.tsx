"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return <div className="h-24 w-full bg-gray-100 animate-pulse rounded-xl" />

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
                                ? "border-black bg-white shadow-sm ring-1 ring-black"
                                : "border-gray-100 bg-white hover:border-gray-300 text-gray-500"
                            }`}
                    >
                        <Icon size={20} className={isActive ? "text-black" : "text-gray-400"} />
                        <span className={`text-xs font-semibold ${isActive ? "text-black" : "text-gray-500"}`}>
                            {option.label}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
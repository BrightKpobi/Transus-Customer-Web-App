'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return (
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <Sun size={18} className="text-gray-700 dark:text-gray-300" />
            </button>
        )
    }

    const CurrentIcon = resolvedTheme === 'dark' ? Moon : Sun

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 outline-none">
                    <CurrentIcon size={18} className="text-gray-700 dark:text-gray-300" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
                align="end" 
                className="w-36 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl"
            >
                <DropdownMenuItem 
                    onClick={() => setTheme('light')}
                    className={`cursor-pointer flex items-center gap-2 ${theme === 'light' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                >
                    <Sun size={16} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-900 dark:text-gray-100">Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                    onClick={() => setTheme('dark')}
                    className={`cursor-pointer flex items-center gap-2 ${theme === 'dark' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                >
                    <Moon size={16} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-900 dark:text-gray-100">Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                    onClick={() => setTheme('system')}
                    className={`cursor-pointer flex items-center gap-2 ${theme === 'system' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                >
                    <Monitor size={16} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-sm text-gray-900 dark:text-gray-100">System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronRight, Check } from 'lucide-react'

interface SelectFieldProps {
    label: string
    placeholder: string
    value: string
    options: string[]
    onChange: (value: string) => void
    disabled?: boolean
}

export function SelectField({
    label,
    placeholder,
    value,
    options,
    onChange,
    disabled = false,
}: SelectFieldProps) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className="space-y-2" ref={dropdownRef}>
            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
                {label}
            </label>

            <div className="relative">
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                    className={`
                        w-full flex items-center justify-between px-4 py-4 
                        bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-left
                        transition
                        ${disabled 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer'
                        }
                    `}
                >
                    <span className={value ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'}>
                        {value || placeholder}
                    </span>
                    <ChevronRight 
                        size={18} 
                        className={`text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} 
                    />
                </button>

                {/* Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
                        {options.map((option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    onChange(option)
                                    setIsOpen(false)
                                }}
                                className={`
                                    w-full flex items-center justify-between px-4 py-3 text-left
                                    hover:bg-gray-50 dark:hover:bg-gray-700 transition
                                    ${value === option ? 'bg-amber-50 dark:bg-amber-900/30' : ''}
                                `}
                            >
                                <span className={value === option ? 'text-amber-600 dark:text-amber-400 font-medium' : 'text-gray-700 dark:text-gray-300'}>
                                    {option}
                                </span>
                                {value === option && (
                                    <Check size={18} className="text-amber-500" />
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

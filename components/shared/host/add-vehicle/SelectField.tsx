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
            <label className="block text-sm font-semibold text-gray-900">
                {label}
            </label>

            <div className="relative">
                <button
                    type="button"
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                    className={`
                        w-full flex items-center justify-between px-4 py-4 
                        bg-gray-50 border border-gray-200 rounded-xl text-left
                        transition
                        ${disabled 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-gray-100 cursor-pointer'
                        }
                    `}
                >
                    <span className={value ? 'text-gray-900' : 'text-gray-400'}>
                        {value || placeholder}
                    </span>
                    <ChevronRight 
                        size={18} 
                        className={`text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`} 
                    />
                </button>

                {/* Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 max-h-60 overflow-y-auto">
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
                                    hover:bg-gray-50 transition
                                    ${value === option ? 'bg-amber-50' : ''}
                                `}
                            >
                                <span className={value === option ? 'text-amber-600 font-medium' : 'text-gray-700'}>
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

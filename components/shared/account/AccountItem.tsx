'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccountItemProps {
    icon: React.ReactNode
    title: string
    subtitle?: string
    onClick?: () => void
    href?: string
    variant?: 'list' | 'grid'
    isSelected?: boolean
}

export function AccountItem({
    icon,
    title,
    subtitle,
    onClick,
    href,
    variant = 'list',
    isSelected = false,
}: AccountItemProps) {
    const isGrid = variant === 'grid'

    const content = (
        <div className={cn(
            "w-full flex transition-all duration-300 ease-out",
            isGrid ? "flex-col items-center justify-center text-center p-10 gap-4" : "flex-row items-center justify-between p-6"
        )}>
            <div className={cn("flex items-center", isGrid ? "flex-col gap-4" : "gap-6")}>
                {/* Icon: Scales and changes to Yellow-600 on hover */}
                <div className={cn(
                    "transition-all duration-300 ease-out",
                    isSelected ? "text-yellow-600" : "text-gray-400 dark:text-gray-500 group-hover:text-yellow-600 group-hover:scale-110"
                )}>
                    {icon}
                </div>

                <div className={cn("text-left transition-transform duration-300 ease-out", !isGrid && "group-hover:translate-x-2")}>
                    <p className={cn(
                        "text-[17px] font-bold leading-tight transition-colors duration-300",
                        isSelected ? "text-yellow-600" : "text-gray-900 dark:text-gray-100"
                    )}>
                        {title}
                    </p>
                    {subtitle && (
                        <p className="text-[14px] text-gray-400 dark:text-gray-500 mt-1 font-medium transition-colors group-hover:text-gray-600 dark:group-hover:text-gray-400">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {!isGrid && (
                <ChevronRight
                    size={20}
                    className={cn(
                        "transition-all duration-300",
                        isSelected ? "text-yellow-600" : "text-gray-200 dark:text-gray-700 group-hover:text-yellow-600 group-hover:translate-x-2"
                    )}
                />
            )}
        </div>
    )

    const baseClassName = cn(
        'group block w-full outline-none relative transition-all duration-300',
        'rounded-none bg-white dark:bg-gray-900', // Strictly no rounding
        isSelected ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900',
        'active:opacity-70' // Simple feedback for click
    )

    if (href) {
        return (
            <Link href={href} className={baseClassName}>
                {content}
            </Link>
        )
    }

    return (
        <button onClick={onClick} className={baseClassName}>
            {content}
        </button>
    )
}

export function AccountSection({
    title,
    children,
    variant = 'list',
}: {
    title: string
    children: React.ReactNode
    variant?: 'list' | 'grid'
}) {
    return (
        <section className="py-4">
            <h2 className="text-[12px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.3em] px-6 mb-2">
                {title}
            </h2>

            <div
                className={cn(
                    variant === 'list'
                        ? 'flex flex-col'
                        : 'grid grid-cols-2 md:grid-cols-3'
                )}
            >
                {children}
            </div>
        </section>
    )
}
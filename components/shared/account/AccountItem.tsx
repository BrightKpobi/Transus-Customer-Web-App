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
}

export function AccountItem({
    icon,
    title,
    subtitle,
    onClick,
    href,
}: AccountItemProps) {
    // The shared inner UI
    const content = (
        <div className="w-full flex items-center justify-between p-5">
            <div className="flex items-center gap-4">
                {/* Icon container with a subtle scale effect on hover */}
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-200">
                    {icon}
                </div>

                <div className="text-left">
                    <p className="text-[15px] font-bold text-gray-800 leading-tight">
                        {title}
                    </p>
                    {subtitle && (
                        <p className="text-xs text-gray-500 mt-1 font-medium">{subtitle}</p>
                    )}
                </div>
            </div>

            <ChevronRight
                size={20}
                className="text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200"
            />
        </div>
    )

    // Base styles for the container
    const baseClassName = cn(
        "group block w-full border-b border-gray-50 last:border-0",
        "bg-white hover:bg-gray-50 transition-colors duration-200"
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
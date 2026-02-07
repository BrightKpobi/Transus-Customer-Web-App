'use client'

import React from 'react'

export default function QuickActionItem({
    icon,
    title,
    sub,
}: {
    icon: React.ReactNode
    title: string
    sub: string
}) {
    return (
        <button className="flex flex-row sm:flex-col items-center sm:items-start p-4 lg:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl lg:rounded-[32px] gap-4 sm:space-y-4 hover:border-yellow-500 transition-all text-left shadow-none group w-full">
            <div className="p-2 lg:p-3 bg-gray-50 dark:bg-gray-800 rounded-xl lg:rounded-2xl border border-gray-100 dark:border-gray-700 group-hover:bg-yellow-50 dark:group-hover:bg-yellow-900/30 transition-colors">
                {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 20 })}
            </div>
            <div>
                <p className="text-[11px] lg:text-xs font-black uppercase text-gray-900 dark:text-gray-100 tracking-tight leading-none mb-1">
                    {title}
                </p>
                <p className="text-[9px] lg:text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-tighter leading-none">
                    {sub}
                </p>
            </div>
        </button>
    )
}

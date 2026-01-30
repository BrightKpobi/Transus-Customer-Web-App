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
        <button className="flex flex-row sm:flex-col items-center sm:items-start p-4 lg:p-6 bg-white border border-gray-200 rounded-2xl lg:rounded-[32px] gap-4 sm:space-y-4 hover:border-yellow-500 transition-all text-left shadow-none group w-full">
            <div className="p-2 lg:p-3 bg-gray-50 rounded-xl lg:rounded-2xl border border-gray-100 group-hover:bg-yellow-50 transition-colors">
                {React.cloneElement(icon as React.ReactElement, { size: 20 })}
            </div>
            <div>
                <p className="text-[11px] lg:text-xs font-black uppercase text-gray-900 tracking-tight leading-none mb-1">
                    {title}
                </p>
                <p className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-tighter leading-none">
                    {sub}
                </p>
            </div>
        </button>
    )
}

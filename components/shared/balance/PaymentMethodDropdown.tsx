'use client'

import { useState } from 'react'
import { ChevronDown, Plus, Circle } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const providers = [
    { id: 1, brand: 'MTN', name: 'MTN MoMo', number: '+233 55 855 6726', color: 'bg-yellow-400', borderColor: 'border-yellow-500' },
    { id: 2, brand: 'VODA', name: 'Telecel Cash', number: '+233 20 123 4567', color: 'bg-red-600 text-white', borderColor: 'border-red-700' },
    { id: 3, brand: 'AIRT', name: 'AirtelTigo Money', number: '+233 27 987 6543', color: 'bg-blue-600 text-white', borderColor: 'border-blue-700' },
    { id: 4, brand: 'BANK', name: 'GCB Bank Ltd', number: '**** **** 8829', color: 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white', borderColor: 'border-gray-300 dark:border-gray-600' },
]

export default function PaymentMethodDropdown() {
    const [selectedProvider, setSelectedProvider] = useState(providers[0])

    return (
        <section className="space-y-4 lg:space-y-6">
            <h2 className="text-lg font-black uppercase tracking-tighter text-gray-900 dark:text-gray-100">
                Select Payment Method
            </h2>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="w-full p-4 lg:p-5 flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-2xl lg:rounded-[28px] cursor-pointer hover:border-gray-900 dark:hover:border-gray-500 transition-all bg-white dark:bg-gray-900 group">
                        <div className="flex items-center gap-3 lg:gap-5">
                            <div className={`w-10 h-10 lg:w-14 lg:h-14 ${selectedProvider.color} rounded-xl lg:rounded-2xl flex items-center justify-center font-black text-[9px] lg:text-[11px] border ${selectedProvider.borderColor}`}>
                                {selectedProvider.brand}
                            </div>
                            <div>
                                <p className="font-bold uppercase text-[11px] lg:text-xs tracking-tight text-gray-900 dark:text-gray-100 mb-0.5 lg:mb-1">
                                    {selectedProvider.name}
                                </p>
                                <p className="text-[10px] lg:text-xs font-bold text-gray-400 dark:text-gray-500 tracking-[0.1em]">
                                    {selectedProvider.number}
                                </p>
                            </div>
                        </div>
                        <ChevronDown size={20} className="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] p-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl z-[60]">
                    {providers.map(provider => (
                        <DropdownMenuItem
                            key={provider.id}
                            onClick={() => setSelectedProvider(provider)}
                            className="flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 ${provider.color} rounded-lg flex items-center justify-center font-black text-[8px] border ${provider.borderColor}`}>
                                    {provider.brand}
                                </div>
                                <div>
                                    <p className="font-bold uppercase text-[10px] text-gray-900 dark:text-gray-100">
                                        {provider.name}
                                    </p>
                                    <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500">
                                        {provider.number}
                                    </p>
                                </div>
                            </div>
                            {selectedProvider.id === provider.id && (
                                <Circle size={8} className="fill-yellow-500 text-yellow-500" />
                            )}
                        </DropdownMenuItem>
                    ))}

                    <div className="border-t border-gray-50 dark:border-gray-800 mt-2 pt-2">
                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 font-bold uppercase text-[10px]">
                            <Plus size={14} />
                            Add New Method
                        </DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 rounded-[24px] lg:rounded-[32px] border border-gray-100 dark:border-gray-800">
                <h3 className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-gray-900 dark:text-gray-100 mb-2">
                    Security Tip
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                    Your transactions are encrypted. Always verify the recipient's name before confirming a transfer.
                </p>
            </div>
        </section>
    )
}

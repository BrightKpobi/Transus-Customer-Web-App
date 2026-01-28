'use client'

import React, { useState } from 'react'
import {
    Wallet,
    History,
    ArrowUpRight,
    Smartphone,
    Banknote,
    ReceiptText,
    ChevronDown,
    Plus,
    Circle
} from 'lucide-react'

import Navbar from '@/components/layouts/navbar/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const providers = [
    { id: 1, brand: 'MTN', name: 'MTN MoMo', number: '+233 55 855 6726', color: 'bg-yellow-400', borderColor: 'border-yellow-500' },
    { id: 2, brand: 'VODA', name: 'Telecel Cash', number: '+233 20 123 4567', color: 'bg-red-600 text-white', borderColor: 'border-red-700' },
    { id: 3, brand: 'AIRT', name: 'AirtelTigo Money', number: '+233 27 987 6543', color: 'bg-blue-600 text-white', borderColor: 'border-blue-700' },
    { id: 4, brand: 'BANK', name: 'GCB Bank Ltd', number: '**** **** 8829', color: 'bg-gray-100 text-gray-900', borderColor: 'border-gray-300' },
]

export default function BalancePageDropdown() {
    const [selectedProvider, setSelectedProvider] = useState(providers[0])

    return (
        <div className="min-h-screen bg-white pb-20 font-sans">
            <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
                <Navbar />
            </div>

            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                    {/* Left Column: Balance & Primary Actions */}
                    <div className="lg:col-span-7 space-y-8 lg:space-y-10">
                        <section className="space-y-4 lg:space-y-6">
                            <h1 className="text-xl lg:text-2xl font-black uppercase tracking-tighter text-gray-900">Wallet Overview</h1>

                            <Card className="border border-gray-200 overflow-hidden rounded-[24px] lg:rounded-[32px] bg-gray-900 text-white shadow-none">
                                <CardContent className="p-6 lg:p-10">
                                    <div className="flex justify-between items-start mb-8 lg:mb-12">
                                        <div className="space-y-1 lg:space-y-2">
                                            <p className="text-gray-400 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em]">Available Balance</p>
                                            <div className="flex items-baseline gap-2 lg:gap-3">
                                                <span className="text-lg lg:text-2xl font-bold text-yellow-500">GHS</span>
                                                <span className="text-5xl lg:text-7xl font-black tracking-tighter">0.00</span>
                                            </div>
                                        </div>
                                        <div className="p-3 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl border border-white/10">
                                            <Wallet size={24} className="text-yellow-500" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                                        <Button className="h-14 lg:h-16 px-8 bg-white text-gray-900 hover:bg-yellow-500 hover:text-black font-black uppercase tracking-widest rounded-xl lg:rounded-2xl transition-all flex items-center justify-center gap-3 border-none shadow-none group">
                                            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                                            Withdraw Funds
                                        </Button>

                                        <Button variant="outline" className="h-14 lg:h-16 px-6 rounded-xl lg:rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 shadow-none">
                                            <History size={18} />
                                            <span className="font-bold uppercase text-[11px] lg:text-xs tracking-widest">History</span>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>

                        <section className="space-y-4 lg:space-y-6">
                            <h2 className="text-lg font-black uppercase tracking-tighter text-gray-900">Quick Actions</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                                <QuickActionItem icon={<Smartphone className="text-orange-500" />} title="Add MoMo" sub="Mobile money" />
                                <QuickActionItem icon={<Banknote className="text-blue-500" />} title="Add Bank" sub="Bank account" />
                                <QuickActionItem icon={<ReceiptText className="text-purple-500" />} title="E-Receipts" sub="Statements" />
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Payment Method Dropdown */}
                    <div className="lg:col-span-5 space-y-8 lg:space-y-10">
                        <section className="space-y-4 lg:space-y-6">
                            <h2 className="text-lg font-black uppercase tracking-tighter text-gray-900">Select Payment Method</h2>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className="w-full p-4 lg:p-5 flex items-center justify-between border border-gray-200 rounded-2xl lg:rounded-[28px] cursor-pointer hover:border-gray-900 transition-all bg-white group">
                                        <div className="flex items-center gap-3 lg:gap-5">
                                            <div className={`w-10 h-10 lg:w-14 h-14 ${selectedProvider.color} rounded-xl lg:rounded-2xl flex items-center justify-center font-black text-[9px] lg:text-[11px] border ${selectedProvider.borderColor}`}>
                                                {selectedProvider.brand}
                                            </div>
                                            <div>
                                                <p className="font-black uppercase text-[11px] lg:text-xs tracking-tight text-gray-900 mb-0.5 lg:mb-1">{selectedProvider.name}</p>
                                                <p className="text-[10px] lg:text-xs font-bold text-gray-400 tracking-[0.1em]">{selectedProvider.number}</p>
                                            </div>
                                        </div>
                                        <ChevronDown size={20} className="text-gray-400 group-hover:text-gray-900 transition-colors" />
                                    </div>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] p-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-[60]">
                                    {providers.map((provider) => (
                                        <DropdownMenuItem
                                            key={provider.id}
                                            onClick={() => setSelectedProvider(provider)}
                                            className="flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 ${provider.color} rounded-lg flex items-center justify-center font-black text-[8px] border ${provider.borderColor}`}>
                                                    {provider.brand}
                                                </div>
                                                <div>
                                                    <p className="font-black uppercase text-[10px] text-gray-900">{provider.name}</p>
                                                    <p className="text-[9px] font-bold text-gray-400">{provider.number}</p>
                                                </div>
                                            </div>
                                            {selectedProvider.id === provider.id && (
                                                <Circle size={8} className="fill-yellow-500 text-yellow-500" />
                                            )}
                                        </DropdownMenuItem>
                                    ))}
                                    <div className="border-t border-gray-50 mt-2 pt-2">
                                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer text-gray-400 hover:text-gray-900 font-bold uppercase text-[10px]">
                                            <Plus size={14} />
                                            Add New Method
                                        </DropdownMenuItem>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <div className="p-6 lg:p-8 bg-gray-50 rounded-[24px] lg:rounded-[32px] border border-gray-100">
                                <h3 className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-gray-900 mb-2">Security Tip</h3>
                                <p className="text-xs lg:text-sm text-gray-500 leading-relaxed font-medium">
                                    Your transactions are encrypted. Always verify the recipient's name before confirming a transfer.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

function QuickActionItem({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) {
    return (
        <button className="flex flex-row sm:flex-col items-center sm:items-start p-4 lg:p-6 bg-white border border-gray-200 rounded-2xl lg:rounded-[32px] gap-4 sm:space-y-4 hover:border-yellow-500 transition-all text-left shadow-none group w-full">
            <div className="p-2 lg:p-3 bg-gray-50 rounded-xl lg:rounded-2xl border border-gray-100 group-hover:bg-yellow-50 transition-colors">
                {React.cloneElement(icon as React.ReactElement, { size: 20 })}
            </div>
            <div>
                <p className="text-[11px] lg:text-xs font-black uppercase text-gray-900 tracking-tight leading-none mb-1">{title}</p>
                <p className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-tighter leading-none">{sub}</p>
            </div>
        </button>
    )
}
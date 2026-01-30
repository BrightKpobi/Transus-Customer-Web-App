'use client'

import { Wallet, History, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function WalletOverview() {
    return (
        <section className="space-y-4 lg:space-y-6">
            <h1 className="text-xl lg:text-2xl font-bold uppercase tracking-tighter text-gray-900">
                Wallet Overview
            </h1>

            <Card className="border border-gray-200 overflow-hidden rounded-[24px] lg:rounded-[32px] bg-gray-900 text-white shadow-none">
                <CardContent className="p-6 lg:p-10">
                    <div className="flex justify-between items-start mb-8 lg:mb-12">
                        <div className="space-y-1 lg:space-y-2">
                            <p className="text-gray-400 text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em]">
                                Available Balance
                            </p>
                            <div className="flex items-baseline gap-2 lg:gap-3">
                                <span className="text-lg lg:text-2xl font-bold text-yellow-500">
                                    GHS
                                </span>
                                <span className="text-5xl lg:text-7xl font-bold ">
                                    0.00
                                </span>
                            </div>
                        </div>
                        <div className="p-3 lg:p-4 bg-white/10 rounded-xl lg:rounded-2xl border border-white/10">
                            <Wallet size={24} className="text-yellow-500" />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                        <Button className="h-14 lg:h-16 px-8 bg-white text-gray-900 hover:bg-yellow-500 hover:text-black font-black uppercase tracking-widest rounded-xl lg:rounded-2xl transition-all flex items-center justify-center gap-3 border-none shadow-none group">
                            <ArrowUpRight
                                size={20}
                                className="group-hover:rotate-45 transition-transform"
                            />
                            Withdraw Funds
                        </Button>

                        <Button
                            variant="outline"
                            className="h-14 lg:h-16 px-6 rounded-xl lg:rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 shadow-none"
                        >
                            <History size={18} />
                            <span className="font-bold uppercase text-[11px] lg:text-xs tracking-widest">
                                History
                            </span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

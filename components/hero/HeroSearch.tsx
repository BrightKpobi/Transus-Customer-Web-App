'use client'

import { useState } from 'react'
import { MapPin, Search, X } from 'lucide-react'
import { format } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { DateRangePicker } from './DateRangePicker'

export default function HeroSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [showMobileCalendar, setShowMobileCalendar] = useState(false)
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState<DateRange | undefined>({ from: undefined, to: undefined })

    return (
        <>
            {/* --- MOBILE TRIGGER --- */}
            <button onClick={() => setIsOpen(true)} className="group flex w-full items-center justify-between rounded-full bg-white p-1.5 pl-6 shadow-xl ring-1 ring-black/5 md:hidden">
                <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-gray-900 leading-tight">Where to?</span>
                    <span className="text-[11px] font-medium text-gray-400">
                        {date?.from ? (
                            <>{format(date.from, "MMM d")} {date.to ? `- ${format(date.to, "MMM d")}` : ""}</>
                        ) : "Add location • Add dates"}
                    </span>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-lg">
                    <Search size={20} strokeWidth={2.5} />
                </div>
            </button>

            {/* --- DESKTOP VIEW --- */}
            <div className="hidden rounded-full bg-white p-3 shadow-2xl ring-1 ring-black/5 md:block">
                <div className="grid gap-4 md:grid-cols-[1fr_1.8fr_auto] items-center">
                    <div className="flex items-center gap-4 rounded-2xl px-5 py-3 text-left hover:bg-gray-50 transition-colors group">
                        <MapPin size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                        <div className="flex flex-col flex-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Location</span>
                            <input
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                placeholder="Where to?"
                                className="text-sm font-bold text-gray-900 bg-transparent outline-none placeholder:text-gray-600 w-full"
                            />
                        </div>
                    </div>

                    <DateRangePicker date={date} setDate={setDate} isMobile={false} />

                    <button className="flex items-center justify-center gap-2 rounded-full bg-black px-10 py-4 text-white hover:bg-gray-900 active:scale-95 transition-all">
                        <Search size={18} strokeWidth={2.5} />
                        <span className="font-bold">Search</span>
                    </button>
                </div>
            </div>


            {/* --- MOBILE FULL-SCREEN DIALOG --- */}
            <Dialog open={isOpen} onOpenChange={(val) => { setIsOpen(val); setShowMobileCalendar(false) }}>
                {/* z-[9999] and h-screen ensures it fills the entire mobile page */}
                <DialogContent className="z-[9999] h-screen w-screen max-w-none p-0 bg-white border-none md:hidden [&>button]:hidden flex flex-col">

                    {/* Header */}
                    <div className="px-6 pt-14 pb-4 flex items-center justify-between bg-white sticky top-0">
                        <div className="space-y-1">
                            <DialogTitle className="text-2xl font-black text-gray-900 tracking-tight">Find a car</DialogTitle>
                            <div className="h-1 w-8 bg-black rounded-full" />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full"
                        >
                            <X size={20} strokeWidth={2.5} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-4 space-y-8 bg-white">
                        {/* Destination */}
                        <div className="space-y-3">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">1. Select Destination</h3>
                            <div className="relative">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                                    <MapPin size={20} />
                                </div>
                                <input
                                    autoFocus
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="City, airport, or hotel..."
                                    className="w-full pl-14 pr-6 py-5 bg-gray-50 rounded-[24px] text-lg font-bold text-gray-900 outline-none focus:ring-2 ring-black/5 transition-all"
                                />
                            </div>
                        </div>

                        {/* Dates */}
                        <div className="space-y-3 pb-10">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">2. Choose Dates</h3>
                            <DateRangePicker
                                date={date}
                                setDate={setDate}
                                isMobile={true}
                                showMobileCalendar={showMobileCalendar}
                                setShowMobileCalendar={setShowMobileCalendar}
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 pt-4 pb-10 bg-white border-t border-gray-100">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-black text-white py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                        >
                            <Search size={20} strokeWidth={3} />
                            Search
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
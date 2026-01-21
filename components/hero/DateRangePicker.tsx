'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { DateRange } from 'react-day-picker'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function DateRangePicker({ date, setDate, isMobile, showMobileCalendar, setShowMobileCalendar }: any) {
    const today = new Date()

    const calendarProps = {
        mode: "range" as const,
        selected: date,
        onSelect: setDate,
        fromDate: today,
        initialFocus: true,
        // Custom styling for the "Today" circle
        modifiers: { today: today },
        modifiersClassNames: {
            today: "after:content-[''] after:block after:w-1 after:h-1 after:bg-black after:rounded-full after:mx-auto after:mt-0.5 font-bold text-black"
        },
    }

    if (!isMobile) {
        return (
            <div className="flex items-center w-full bg-gray-50 rounded-2xl border border-transparent focus-within:ring-2 ring-black/5 transition-all">
                <Popover>
                    <PopoverTrigger asChild>
                        <button className="flex flex-1 items-center gap-3 px-5 py-3 text-left hover:bg-gray-100/50 transition-colors rounded-l-2xl border-r border-gray-200">
                            <CalendarIcon size={18} className="text-gray-400" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase text-gray-400">Pick up</span>
                                <span className="text-sm font-bold text-gray-600">{date?.from ? format(date.from, "MMM d") : "Add date"}</span>
                            </div>
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white shadow-2xl rounded-3xl border-none z-[10001]" align="start">
                        <Calendar {...calendarProps} numberOfMonths={2} className="p-4 bg-gray-500 rounded-3xl" />
                    </PopoverContent>
                </Popover>

                <Popover>
                    <PopoverTrigger asChild>
                        <button className="flex flex-1 items-center gap-3 px-5 py-3 text-left hover:bg-gray-100/50 transition-colors rounded-r-2xl">
                            <CalendarIcon size={18} className="text-gray-400" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold uppercase text-gray-400">Return</span>
                                <span className="text-sm font-bold text-gray-600">{date?.to ? format(date.to, "MMM d") : "Add date"}</span>
                            </div>
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white shadow-2xl rounded-3xl border-none z-[10001]" align="start">
                        <Calendar {...calendarProps} numberOfMonths={2} className="p-4 bg-white rounded-3xl" />
                    </PopoverContent>
                </Popover>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
                {/* Fixed Border Logic: Only black border if calendar is open OR date is selected */}
                <button
                    onClick={() => setShowMobileCalendar?.(true)}
                    className={cn(
                        "flex flex-col p-4 rounded-2xl border-2 transition-all text-left",
                        showMobileCalendar || date?.from ? "border-black bg-white" : "border-transparent bg-gray-50"
                    )}
                >
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Pickup</span>
                    <span className="text-sm font-bold text-gray-600">{date?.from ? format(date.from, "MMM d, yyyy") : "Add date"}</span>
                </button>
                <button
                    onClick={() => setShowMobileCalendar?.(true)}
                    className={cn(
                        "flex flex-col p-4 rounded-2xl border-2 transition-all text-left",
                        (showMobileCalendar && date?.from) || date?.to ? "border-black bg-white" : "border-transparent bg-gray-50"
                    )}
                >
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Return</span>
                    <span className="text-sm font-bold text-gray-600">{date?.to ? format(date.to, "MMM d, yyyy") : "Add date"}</span>
                </button>
            </div>

            {showMobileCalendar && (
                <div className="w-full rounded-3xl border border-gray-100 bg-white p-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
                    {/* class 'w-full' inside Calendar ensures it fills the container */}
                    <Calendar
                        {...calendarProps}
                        className="w-full flex justify-center bg-white rounded-2xl"
                    />
                </div>
            )}
        </div>
    )
}
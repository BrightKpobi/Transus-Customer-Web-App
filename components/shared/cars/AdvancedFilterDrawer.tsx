"use client"

import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface AdvancedFilterProps {
    onApply?: (filters: any) => void;
}

const AdvancedFilterDrawer: React.FC<AdvancedFilterProps> = ({ onApply }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest flex items-center gap-2 cursor-pointer">
                    <span>+ Advanced Options</span>
                </button>
            </SheetTrigger>

            <SheetContent className="w-[400px] sm:w-[450px] bg-white border-l border-gray-200 p-0 flex flex-col overflow-hidden shadow-2xl">
                <div className="p-8 pb-6 bg-gray-50/50">
                    <SheetHeader>
                        <SheetTitle className="text-2xl font-bold uppercase tracking-tighter text-gray-900">
                            Advanced Filters
                        </SheetTitle>
                        <SheetDescription className="text-gray-500 font-medium">
                            Refine your search with specific technical details.
                        </SheetDescription>
                    </SheetHeader>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-10">
                    <FilterSection title="Drivetrain">
                        {['AWD/4WD', 'Front Wheel Drive', 'Rear Wheel Drive'].map(item => (
                            <FilterCheckbox key={item} label={item} id={item.toLowerCase()} />
                        ))}
                    </FilterSection>

                    <Separator className="bg-gray-100" />

                    <FilterSection title="Interior & Technology">
                        <div className="grid grid-cols-1 gap-4">
                            {['Leather Seats', 'Sunroof', 'Apple CarPlay', 'Heated Seats', 'Premium Audio'].map(item => (
                                <FilterCheckbox key={item} label={item} id={item.toLowerCase()} />
                            ))}
                        </div>
                    </FilterSection>

                    <Separator className="bg-gray-100" />

                    <FilterSection title="Exterior Color">
                        <div className="flex flex-wrap gap-3 pt-2">
                            {['bg-black', 'bg-white border', 'bg-red-600', 'bg-blue-600', 'bg-gray-400', 'bg-emerald-600'].map((color, i) => (
                                <button
                                    key={i}
                                    className={`w-10 h-10 rounded-xl ${color} ring-offset-2 hover:ring-2 ring-black transition-all active:scale-95 shadow-sm`}
                                />
                            ))}
                        </div>
                    </FilterSection>
                </div>

                <div className="p-6 bg-white border-t border-gray-100 flex gap-4">
                    <Button className="flex-1 bg-black text-white hover:bg-gray-800 rounded-xl h-12 font-bold uppercase tracking-wide transition-all">
                        Apply Filters
                    </Button>
                    <Button variant="outline" className="rounded-xl h-12 px-8 border-gray-200 hover:bg-gray-50 font-bold uppercase text-xs">
                        Reset
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
};

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="space-y-5">
        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">{title}</h4>
        <div className="flex flex-col gap-4">{children}</div>
    </div>
);

const FilterCheckbox: React.FC<{ label: string; id: string }> = ({ label, id }) => (
    <label htmlFor={id} className="flex items-center justify-between cursor-pointer group">
        <span className="text-sm font-bold text-gray-700 group-hover:text-black transition-colors">{label}</span>
        <Checkbox id={id} className="w-5 h-5 rounded-md border-gray-300 data-[state=checked]:bg-black data-[state=checked]:border-black" />
    </label>
);

export default AdvancedFilterDrawer;
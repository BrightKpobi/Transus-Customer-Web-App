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
<<<<<<< HEAD
                <button className="text-xs font-bold text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2">
=======
                <button className="text-xs font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest flex items-center gap-2 cursor-pointer">
>>>>>>> d4d90423601f6e1734d458dc0e0915ea0d886544
                    <span>+ Advanced Options</span>
                </button>
            </SheetTrigger>

            <SheetContent className="w-[400px] sm:w-[450px] bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 p-0 flex flex-col overflow-hidden shadow-2xl dark:shadow-gray-900/50">
                <div className="p-8 pb-6 bg-gray-50/50 dark:bg-gray-900/50">
                    <SheetHeader>
<<<<<<< HEAD
                        <SheetTitle className="text-2xl font-black uppercase tracking-tighter text-gray-900 dark:text-gray-100">
=======
                        <SheetTitle className="text-2xl font-bold uppercase tracking-tighter text-gray-900">
>>>>>>> d4d90423601f6e1734d458dc0e0915ea0d886544
                            Advanced Filters
                        </SheetTitle>
                        <SheetDescription className="text-gray-500 dark:text-gray-400 font-medium">
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

                    <Separator className="bg-gray-100 dark:bg-gray-800" />

                    <FilterSection title="Interior & Technology">
                        <div className="grid grid-cols-1 gap-4">
                            {['Leather Seats', 'Sunroof', 'Apple CarPlay', 'Heated Seats', 'Premium Audio'].map(item => (
                                <FilterCheckbox key={item} label={item} id={item.toLowerCase()} />
                            ))}
                        </div>
                    </FilterSection>

                    <Separator className="bg-gray-100 dark:bg-gray-800" />

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

<<<<<<< HEAD
                <div className="p-6 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 flex gap-4">
                    <Button className="flex-1 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-xl h-14 font-bold uppercase tracking-wide transition-all">
                        Apply Filters
                    </Button>
                    <Button variant="outline" className="rounded-xl h-14 px-8 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 font-bold uppercase text-xs">
=======
                <div className="p-6 bg-white border-t border-gray-100 flex gap-4">
                    <Button className="flex-1 bg-black text-white hover:bg-gray-800 rounded-xl h-12 font-bold uppercase tracking-wide transition-all">
                        Apply Filters
                    </Button>
                    <Button variant="outline" className="rounded-xl h-12 px-8 border-gray-200 hover:bg-gray-50 font-bold uppercase text-xs">
>>>>>>> d4d90423601f6e1734d458dc0e0915ea0d886544
                        Reset
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
};

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="space-y-5">
        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">{title}</h4>
        <div className="flex flex-col gap-4">{children}</div>
    </div>
);

const FilterCheckbox: React.FC<{ label: string; id: string }> = ({ label, id }) => (
    <label htmlFor={id} className="flex items-center justify-between cursor-pointer group">
        <span className="text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">{label}</span>
        <Checkbox id={id} className="w-5 h-5 rounded-md border-gray-300 dark:border-gray-600 data-[state=checked]:bg-black dark:data-[state=checked]:bg-white data-[state=checked]:border-black dark:data-[state=checked]:border-white" />
    </label>
);

export default AdvancedFilterDrawer;
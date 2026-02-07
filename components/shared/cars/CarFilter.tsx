"use client"

import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import AdvancedFilterDrawer from './AdvancedFilterDrawer';

// Define the shape of your filter state
interface CarFilters {
    condition?: string;
    make?: string;
    model?: string;
    bodyType?: string;
    priceMax?: string;
    transmission?: string;
    fuelType?: string;
}

const CarFilterBar: React.FC = () => {
    const [filters, setFilters] = useState<CarFilters>({});

    const handleSelectChange = (name: keyof CarFilters, value: string) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleSearch = () => {
        console.log('Final Filters Applied:', filters);
    };

    return (
        <div className="w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 py-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 items-end">

                    <FilterItem
                        label="Condition"
                        name="condition"
                        placeholder="New & Used"
                        options={['New', 'Used', 'Certified']}
                        onChange={handleSelectChange}
                    />

                    <FilterItem
                        label="Make"
                        name="make"
                        placeholder="All Makes"
                        options={['Toyota', 'BMW', 'Tesla', 'Ford', 'Porsche']}
                        onChange={handleSelectChange}
                    />

                    <FilterItem
                        label="Model"
                        name="model"
                        placeholder="All Models"
                        options={['911', 'Model 3', 'X5', 'F-150']}
                        onChange={handleSelectChange}
                    />

                    <FilterItem
                        label="Body Style"
                        name="bodyType"
                        placeholder="Any Style"
                        options={['Sedan', 'SUV', 'Coupe', 'Hatchback']}
                        onChange={handleSelectChange}
                    />

                    <FilterItem
                        label="Max Price"
                        name="priceMax"
                        placeholder="No Max"
                        options={['$20k', '$50k', '$80k', '$100k+']}
                        onChange={handleSelectChange}
                    />

                    <FilterItem
                        label="Gearbox"
                        name="transmission"
                        placeholder="Any"
                        options={['Automatic', 'Manual']}
                        onChange={handleSelectChange}
                    />

                    <FilterItem
                        label="Fuel"
                        name="fuelType"
                        placeholder="Any"
                        options={['Petrol', 'Diesel', 'Electric', 'Hybrid']}
                        onChange={handleSelectChange}
                    />

                    <Button
                        onClick={handleSearch}
                        className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-xl h-12 font-bold uppercase tracking-wide transition-all active:scale-[0.98]\"
                    >\n                        Search\n                    </Button>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
                    <div className="flex gap-6 items-center">
                        <AdvancedFilterDrawer />
                        <button
                            onClick={() => setFilters({})}
                            className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors uppercase tracking-widest"
                        >
                            Clear All
                        </button>
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">4,200+ matches found</p>
                </div>
            </div>
        </div>
    );
};

interface FilterItemProps {
    label: string;
    name: keyof CarFilters;
    placeholder: string;
    options: string[];
    onChange: (name: keyof CarFilters, value: string) => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ label, name, placeholder, options, onChange }) => (
    <div className="flex flex-col space-y-2">
        <label className="text-[11px] font-bold uppercase text-gray-500 dark:text-gray-400 tracking-tight ml-1">{label}</label>
        <Select onValueChange={(v) => onChange(name, v)}>
            <SelectTrigger className="w-full rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-12 focus:ring-1 focus:ring-black dark:focus:ring-gray-500 focus:bg-white dark:focus:bg-gray-700 transition-all text-sm font-medium">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="rounded-xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-gray-900/50 overflow-hidden">
                {options.map((opt) => (
                    <SelectItem key={opt} value={opt.toLowerCase()} className="focus:bg-gray-100 dark:focus:bg-gray-800 cursor-pointer py-3">{opt}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
);

export default CarFilterBar;
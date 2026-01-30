"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoreVertical, Calendar, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layouts/navbar/Navbar";
import { useRouter } from "next/navigation";

import { useFavorites } from "@/components/shared/car-carousel/FavoritesContext";
import { AccraCars, LegonCars, Car } from "@/data/CarsData";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function FavouritesPage() {
    const router = useRouter();
    const { favorites } = useFavorites();
    // Combine all cars
    const allCars: Car[] = [...AccraCars, ...LegonCars];
    // Only show cars that are favorited
    const favoriteCars = allCars.filter((car) => favorites[String(car.id)]);

    const BackButton = () => (
        <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition mb-4"
            aria-label="Back"
        >
            <ChevronLeft size={24} className="text-gray-900" />
        </button>
    );

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="mx-auto max-w-7xl px-4 py-6">
                <BackButton />
                <h1 className="text-2xl font-bold mb-6">Favorites</h1>
                {favoriteCars.length === 0 ? (
                    <p className="text-gray-500 text-center">No favorites yet. Like a car to add it here!</p>
                ) : (
                    <div className="space-y-10">
                        {favoriteCars.map((fav, idx) => (
                            <FavoriteCard key={`${fav.id}-${idx}`} fav={fav} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

function FavoriteCard({ fav }: { fav: Car }) {
    const { toggleFavorite } = useFavorites();

    return (
        <div className="flex gap-4 items-start group">
            <Link href={`/checkout/${fav.id}`} className="flex-1 flex gap-4 group">
                {/* Next.js Optimized Image */}
                <div className="relative h-24 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                        src={fav.image}
                        alt={fav.name}
                        fill
                        className="object-cover"
                        sizes="112px"
                    />
                </div>

                {/* Info Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                        <div className="truncate">
                            <h3 className="text-[16px] font-bold text-gray-900 truncate leading-tight">
                                {fav.name}
                            </h3>
                            <p className="text-[11px] text-gray-400 font-medium mt-0.5 uppercase tracking-tighter">
                                {fav.year}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2.5 text-gray-500">
                        <Calendar size={14} className="text-gray-400" />
                        <span className="text-[12px] font-medium tracking-tight">Hosted by {fav.host}</span>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                        <p className="text-[12px] text-gray-500 truncate pr-2">
                            {fav.seats}, {fav.fuel}, {fav.transmission}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-[15px] font-bold text-[#4285F4] whitespace-nowrap">
                                GHS {fav.pricePerDay}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Menu */}
            <div className="flex-shrink-0">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="p-2 rounded-md text-gray-500 hover:bg-gray-50">
                            <MoreVertical size={18} />
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-44 bg-white border border-gray-100 shadow-lg">
                        <DropdownMenuItem
                            className="text-yellow-600 hover:bg-yellow-50 font-semibold"
                            onClick={() => toggleFavorite(String(fav.id))}
                        >
                            Remove from favorites
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
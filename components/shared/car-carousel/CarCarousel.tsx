'use client'

import * as React from "react"
import { useFavorites } from "./FavoritesContext"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Star, Heart } from "lucide-react"
import { Car } from "@/data/CarsData"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface CarCarouselProps {
    title?: string
    data: Car[]
    slug: string
}

export function CarCarousel({ title, data, slug }: CarCarouselProps) {
    const { favorites, toggleFavorite } = useFavorites();
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-4 ">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                {title && (
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">{title}</h2>

<<<<<<< HEAD
                    <div className="relative flex gap-2 mr-12">
                        <CarouselPrevious className="static translate-y-0 border-none bg-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black active:bg-black dark:active:bg-white active:text-white dark:active:text-black transition-all hidden md:flex" />
                        <CarouselNext className="static translate-y-0 border-none bg-transparent hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black active:bg-black dark:active:bg-white active:text-white dark:active:text-black transition-all hidden md:flex" />
=======
                        <div className="relative flex gap-2 mr-12">
                            <CarouselPrevious className="static translate-y-0 border-none bg-transparent hover:bg-black hover:text-white active:bg-black active:text-white transition-all hidden md:flex" />
                            <CarouselNext className="static translate-y-0 border-none bg-transparent hover:bg-black hover:text-white active:bg-black active:text-white transition-all hidden md:flex" />
                        </div>
>>>>>>> d4d90423601f6e1734d458dc0e0915ea0d886544
                    </div>
                )}

                {!title && (
                    <div className="flex justify-end mb-6">
                        <div className="relative flex gap-2 mr-12">
                            <CarouselPrevious className="static translate-y-0 border-none bg-transparent hover:bg-black hover:text-white active:bg-black active:text-white transition-all hidden md:flex" />
                            <CarouselNext className="static translate-y-0 border-none bg-transparent hover:bg-black hover:text-white active:bg-black active:text-white transition-all hidden md:flex" />
                        </div>
                    </div>
                )}

                <CarouselContent className="-ml-2 md:-ml-4">
                    {data.map((car) => {
                        const isFavorite = favorites[String(car.id)];
                        return (
                            <CarouselItem
                                key={car.id}
                                className="pl-2 md:pl-4 basis-1/2 md:basis-1/2 lg:basis-1/4"
                            >
                                <Link
                                    href={`/checkout/${car.id}`}
                                    className="block space-y-3 group cursor-pointer"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                                        <Image
                                            src={car.image}
                                            alt={car.name}
                                            fill
                                            className="object-cover transition duration-300 group-hover:scale-105"
                                        />
                                        {/* FAVORITE TOGGLE */}
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                toggleFavorite(String(car.id));
                                            }}
                                            className="absolute top-2 left-2 h-8 w-8 rounded-full bg-white/90 dark:bg-gray-900/90 flex items-center justify-center"
                                        >
                                            <Heart
                                                size={16}
                                                className={
                                                    isFavorite
                                                        ? "fill-red-500 text-red-500"
                                                        : "text-gray-400"
                                                }
                                            />
                                        </button>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-sm md:text-lg leading-tight truncate">
                                            {car.name} {car.year}
                                        </h3>
                                        <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                                            <span className="font-bold text-foreground">
                                                {car.rating.toFixed(1)}
                                            </span>
                                            <Star className="h-3 w-3 fill-primary text-primary" />
                                            <span className="hidden xs:inline">
                                                ({car.trips} trips)
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Hosted by {car.host}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            <span className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-full">
                                                {car.seats}
                                            </span>
                                            <span className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-full">
                                                {car.fuel}
                                            </span>
                                            <span className="text-[10px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-full">
                                                {car.transmission}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                                                GHS {car.pricePerDay.toFixed(2)}
                                                <span className="text-gray-400 dark:text-gray-500 font-medium"> / day</span>
                                            </p>
                                            {car.available && (
                                                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-0.5 rounded-full">
                                                    Available
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
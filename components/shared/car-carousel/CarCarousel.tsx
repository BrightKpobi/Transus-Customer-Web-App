import * as React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link
import { ChevronRight, Star } from "lucide-react";
import { Car } from "@/data/CarsData";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface CarCarouselProps {
    title: string;
    data: Car[];
    slug: string; // Add slug prop (e.g., "accra" or "legon")
}

export function CarCarousel({ title, data, slug }: CarCarouselProps) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
                <div className="flex items-center justify-between mb-6">
                    {/* Wrap title in Link */}
                    <Link
                        href={`/cars/${slug}`}
                        className="group flex items-center gap-1 hover:opacity-70 transition"
                    >
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <ChevronRight className="h-6 w-6 mt-1 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <div className="relative flex gap-2 mr-12">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </div>

                <CarouselContent className="-ml-4">
                    {data.map((car) => (
                        <CarouselItem key={car.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                            {/* Wrap individual cars in Link for checkout/details */}
                            <Link href={`/checkout/${car.id}`} className="block space-y-3 group cursor-pointer">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
                                    <Image
                                        src={car.image}
                                        alt={car.name}
                                        fill
                                        className="object-cover transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg leading-tight">
                                        {car.name} {car.year}
                                    </h3>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                        <span className="font-bold text-foreground">{car.rating.toFixed(1)}</span>
                                        <Star className="h-3 w-3 fill-primary text-primary" />
                                        <span>({car.trips} trips)</span>
                                    </div>
                                </div>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}
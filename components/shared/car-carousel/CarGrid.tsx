"use client";

import * as React from "react";
import { useFavorites } from "./FavoritesContext";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart } from "lucide-react";
import { Car } from "@/data/CarsData";

interface CarGridProps {
  title?: string;
  data: Car[];
  slug: string;
}

export function CarGrid({ title, data, slug }: CarGridProps) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {data.map((car) => {
          const isFavorite = favorites[String(car.id)];
          return (
            <div key={car.id}>
              <Link
                href={`/checkout/${car.id}`}
                className="block space-y-3 group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gray-100">
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
                    className="absolute top-2 left-2 h-8 w-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
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
                  <p className="text-xs text-gray-500">Hosted by {car.host}</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded-full">
                      {car.seats}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded-full">
                      {car.fuel}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded-full">
                      {car.transmission}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-blue-600">
                      GHS {car.pricePerDay.toFixed(2)}
                      <span className="text-gray-400 font-medium"> / day</span>
                    </p>
                    {car.available && (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Available
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

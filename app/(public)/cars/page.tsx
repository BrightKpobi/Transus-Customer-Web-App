
import { CarCarousel } from "@/components/shared/car-carousel/CarCarousel";
import CarFilterBar from "@/components/shared/cars/CarFilter";
import { CantonmentsCars } from "@/data/CarsData";

import React from 'react'

export default function CarsPage() {
    return (
        <div>
            <CarFilterBar />

            <div className="space-y-5">
                <CarCarousel title="Available Cars" data={CantonmentsCars} slug="cantonments" />
                <CarCarousel data={CantonmentsCars} slug="cantonments" />
            </div>

        </div>
    )
}

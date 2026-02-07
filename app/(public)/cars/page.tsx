import { CarCarousel } from "@/components/shared/car-carousel/CarCarousel";
import CarFilterBar from "@/components/shared/cars/CarFilter";
import { AllCars } from "@/data/CarsData";
import { CarGrid } from "@/components/shared/car-carousel/CarGrid";

import React from "react";

export default function CarsPage() {
  return (
    <div>
      <CarFilterBar />

<<<<<<< HEAD
    return (
        <main className="bg-white dark:bg-gray-950 min-h-screen">
            <CarFilterBar />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
                    Available cars
                </h1>

                <CarGrid cars={cars} />
            </div>
        </main>
    );
=======
      <div className="space-y-5">
        <CarGrid data={AllCars} slug="all-cars" title="All Cars" />
      </div>
    </div>
  );
>>>>>>> d4d90423601f6e1734d458dc0e0915ea0d886544
}

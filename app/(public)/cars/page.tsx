import { CarCarousel } from "@/components/shared/car-carousel/CarCarousel";
import CarFilterBar from "@/components/shared/cars/CarFilter";
import { AllCars } from "@/data/CarsData";
import { CarGrid } from "@/components/shared/car-carousel/CarGrid";

import React from "react";

export default function CarsPage() {
  return (
    <div>
      <CarFilterBar />

      <div className="space-y-5">
        <CarGrid data={AllCars} slug="all-cars" title="All Cars" />
      </div>
    </div>
  );
}

"use client";

import Hero from "@/components/hero/Hero";
import { CarCarousel } from "@/components/shared/car-carousel/CarCarousel";
import { AccraCars, LegonCars, CantonmentsCars } from "@/data/CarsData";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">


      <Hero />

      {/* Reduced py-8 (padding top/bottom) and space-y-10 (gap between carousels) */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        <section>
          <CarCarousel
            title="Monthly car rentals in Accra"
            data={AccraCars}
            slug="accra"
          />
        </section>

        <section>
          <CarCarousel
            title="Newer cars in East Legon"
            data={LegonCars}
            slug="east-legon"
          />
        </section>

        <section>
          <CarCarousel
            title="Check our latest SUVs"
            data={CantonmentsCars}
            slug="contanments"
          />
        </section>

        <section>
          <CarCarousel
            title="Hosted Cars Available"
            data={LegonCars}
            slug="east-legon"
          />
        </section>

      </div>

    </main>
  );
}
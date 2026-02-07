"use client";

import Hero from "@/components/hero/Hero";
import { CarGrid } from "@/components/shared/car-carousel/CarGrid";
import { AllCars } from "@/data/CarsData";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Hero />

      {/* Reduced py-8 (padding top/bottom) and space-y-10 (gap between carousels) */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <div className=" mx-auto max-w-7xl flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Cars</h2>
          <Link
            href="/cars"
            className="text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors">
            View All Cars →
          </Link>
        </div>
        <CarGrid data={AllCars} slug="all-cars" />
      </div>
    </main>
  );
}

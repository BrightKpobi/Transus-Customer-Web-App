"use client"; // ⚠️ Must be first line

import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import Hero from "@/components/hero/Hero";
import { CarCarousel } from "@/components/shared/car-carousel/CarCarousel";

import { AccraCars, LegonCars, CantonmentsCars } from "@/data/CarsData";

export default function Home() {

  return (
    <main className="min-h-screen bg-white ">
      {/* Top Navigation */}
      <Navbar />

      <Hero />

      <div className="bg-white ">
        <CarCarousel
          title="Monthly car rentals in Accra"
          data={AccraCars}
          slug="accra"
        />
        <CarCarousel
          title="Newer cars in East Legon"
          data={LegonCars}
          slug="east-legon"
        />
        <CarCarousel
          title="Check our latest SUVs"
          data={CantonmentsCars}
          slug="contanments"
        />
        <CarCarousel
          title="Hosted Cars Available"
          data={LegonCars}
          slug="east-legon"
        />
      </div>
      <Footer />
    </main>
  );
}
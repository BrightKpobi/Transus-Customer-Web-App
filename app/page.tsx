
// import Navbar from "@/components/layouts/navbar/Navbar";
// import Hero from "@/components/hero/Hero";

// export default function Home() {
//   return (
//     <main className="min-h-screen">
//       <Navbar />
//       <Hero />


//     </main>
//   );
// }


import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import Hero from "@/components/hero/Hero";

import { CarCarousel } from "@/components/shared/car-carousel/CarCarousel";
import { AccraCars, LegonCars } from "@/data/CarsData";

export default function Home() {
  return (
    <main className="min-h-screen ">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Banner */}
      <Hero />

      {/* @Kevin listed cars here  */}
      <div>
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
          data={LegonCars}
          slug="east-legon"
        />

      </div>

      <Footer />
    </main>
  );
}


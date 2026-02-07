import { AllCars, Car } from "@/data/CarsData";
import Image from "next/image";
import {
  Fuel,
  Users,
  Gauge,
  Star,
  ShieldCheck,
  MapPin,
  Calendar,
} from "lucide-react";

interface CarSlugPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CarSlugPage({ params }: CarSlugPageProps) {
  const { slug } = await params;
  const car: Car | undefined = AllCars.find((c) => c.slug === slug);

  if (!car) {
    return (
      <div className="h-96 flex items-center justify-center text-gray-500 font-medium">
        Car not found.
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-6 md:py-12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
              {car.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-slate-600">
              <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="font-bold text-slate-900">
                  {car.rating.toFixed(1)}
                </span>
                <span className="text-xs">({car.trips} trips)</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Hero Image - No shadow, clean border */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-4 border-slate-50">
            <Image
              src={car.image}
              alt={car.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              {
                icon: <Users className="w-5 h-5" />,
                label: `${car.seats} Seats`,
              },
              { icon: <Gauge className="w-5 h-5" />, label: car.transmission },
              { icon: <Fuel className="w-5 h-5" />, label: car.fuel },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                label: "Full Cover",
              },
            ].map((spec, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50">
                <div className="text-yellow-500">{spec.icon}</div>
                <span className="text-sm font-bold text-slate-700">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Flat Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 p-8 rounded-3xl border-2 border-slate-100 bg-white">
            <div className="mb-6">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Daily Rate
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900">
                  GHS {car.pricePerDay.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 ml-1">
                  TRIP DATES
                </label>
                <div className="flex items-center gap-3 p-3 border-2 border-slate-100 rounded-xl bg-slate-50 text-slate-600">
                  <Calendar className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Select dates</span>
                </div>
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-black py-4 rounded-xl transition-colors uppercase tracking-wide">
                Book Now
              </button>

              <div className="pt-6 mt-4 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                  Owned by {car.host}
                </p>
              </div>
            </div>

            {/* Availability Flat Badge */}
            <div
              className={`mt-6 text-center py-2 rounded-lg text-xs font-black uppercase tracking-widest border-2 ${
                car.available
                  ? "text-emerald-600 border-emerald-100 bg-emerald-50"
                  : "text-rose-500 border-rose-100 bg-rose-50"
              }`}>
              {car.available ? "● Unit Available" : "Sold Out"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

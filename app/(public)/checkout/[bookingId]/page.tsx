import Image from "next/image";
import Link from "next/link";
import { AllCars } from "@/data/CarsData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Fuel,
  Gauge,
  MapPin,
  ShieldCheck,
  Info,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";

interface CheckoutPageProps {
  params: Promise<{
    bookingId: string;
  }>;
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { bookingId } = await params;
  const car = AllCars.find((c) => c.id === bookingId);

  if (!car) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-2xl font-bold tracking-tighter">
          Vehicle not found.
        </h2>
        <Button asChild variant="link" className="mt-4">
          <Link href="/cars">Return to fleet</Link>
        </Button>
      </div>
    );
  }

  const taxAmount = car.pricePerDay * 0.15;
  const totalAmount = car.pricePerDay + taxAmount;

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-black selection:text-white">
      {/* Top Nav */}
      <nav className="border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/cars"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
            <ChevronLeft size={14} />
            Back
          </Link>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Step 02 — Secure Checkout
          </span>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* CONTENT SECTION */}
          <div className="lg:col-span-7 space-y-16">
            <header className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-medium tracking-tighter leading-none">
                Confirm your <br /> reservation.
              </h1>
              <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                Everything looks ready. Please review the details of your{" "}
                {car.name} booking.
              </p>
            </header>

            {/* Vehicle Preview - Flat Design */}
            <section className="space-y-8">
              <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
                <div>
                  <h2 className="text-3xl font-medium tracking-tight">
                    {car.name}
                  </h2>
                  <div className="flex gap-4 mt-3">
                    <span className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400">
                      <Gauge size={14} className="mr-2" /> {car.transmission}
                    </span>
                    <span className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400">
                      <Fuel size={14} className="mr-2" /> {car.fuel}
                    </span>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-full border-slate-200 px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
                  Premium Selection
                </Badge>
              </div>
            </section>

            {/* Grid Details */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-t border-slate-100 pt-12 gap-12 px-2">
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Pick-up Location
                </p>
                <p className="text-lg font-medium">Kotoka Intl Airport</p>
                <p className="text-slate-500 text-sm">
                  Terminal 3, Arrival Hall Gate 2
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Rental Period
                </p>
                <p className="text-lg font-medium">Feb 15 — Feb 16</p>
                <p className="text-slate-500 text-sm">24 Hour reservation</p>
              </div>
            </section>
          </div>

          {/* SUMMARY SIDEBAR */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-[2rem] p-8 lg:p-12 border border-slate-100 lg:sticky lg:top-12">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-10 text-slate-400">
                Price Breakdown
              </h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-medium">
                    Daily Rental
                  </span>
                  <span className="font-semibold text-slate-900">
                    GHS {car.pricePerDay.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">VAT & Services (15%)</span>
                  <span className="text-slate-900 font-medium">
                    GHS {taxAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Insurance Fee</span>
                  <span className="text-green-600 font-bold uppercase text-[10px] tracking-widest">
                    Waived
                  </span>
                </div>

                <Separator className="bg-slate-200 opacity-50 my-8" />

                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400">
                    Total
                  </span>
                  <div className="text-right">
                    <span className="block text-5xl font-medium tracking-tighter leading-none">
                      GHS {totalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="pt-10 space-y-4">
                  <Button className="w-full h-16 bg-black hover:bg-slate-800 text-white rounded-full text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center group">
                    Confirm and Pay
                    <ArrowRight
                      size={16}
                      className="ml-2 transform group-hover:translate-x-1 transition-transform"
                    />
                  </Button>

                  <div className="flex items-center justify-center gap-2 pt-2">
                    <ShieldCheck size={12} className="text-slate-400" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Secure 256-bit SSL Payment
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Box */}
            <div className="mt-6 px-8 flex items-center gap-4 text-slate-400 hover:text-slate-900 cursor-pointer transition-colors group">
              <Info size={16} />
              <span className="text-xs font-bold uppercase tracking-widest group-hover:underline decoration-2 underline-offset-4">
                Need help with this booking?
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

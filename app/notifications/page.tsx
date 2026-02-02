"use client";

import React from "react";
import Navbar from "@/components/layouts/navbar/Navbar";
import { ChevronLeft, BellOff, Info } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition"
            aria-label="Back"
          >
            <ChevronLeft size={20} />
          </button>

          <h1 className="flex-1 text-center text-lg font-bold">Notifications</h1>

          <div className="w-10" />
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="bg-yellow-50 rounded-3xl p-6">
              <div className="bg-yellow-100 rounded-2xl p-6">
                <BellOff size={48} className="text-yellow-600" />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2">No Notifications Yet</h2>
          <p className="text-sm text-gray-500 mb-6">You're all caught up! We'll notify you when there's something new.</p>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-2xl bg-white hover:bg-gray-50">
            <Info size={16} className="text-gray-500" />
            <span className="font-medium text-sm">Stay tuned for updates</span>
          </button>
        </div>
      </main>
    </div>
  );
}

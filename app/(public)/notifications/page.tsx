"use client";

import React from "react";

import { ChevronLeft, BellOff, Info } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">


      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition"
            aria-label="Back"
          >
            <ChevronLeft size={20} className="text-gray-900 dark:text-gray-100" />
          </button>

          <h1 className="flex-1 text-center text-lg font-bold text-gray-900 dark:text-gray-100">Notifications</h1>

          <div className="w-10" />
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <div className="mb-6">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-3xl p-6">
              <div className="bg-yellow-100 dark:bg-yellow-900/40 rounded-2xl p-6">
                <BellOff size={48} className="text-yellow-600 dark:text-yellow-500" />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">No Notifications Yet</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">You're all caught up! We'll notify you when there's something new.</p>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Info size={16} className="text-gray-500 dark:text-gray-400" />
            <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Stay tuned for updates</span>
          </button>
        </div>
      </main>
    </div>
  );
}

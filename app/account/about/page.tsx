import React from 'react';
import { FileText, ShieldCheck, ExternalLink } from 'lucide-react';
import Navbar from '@/components/layouts/navbar/Navbar';

export default function AboutPage() {
    return (
        /* 1. Main Div: Removed py-8 and added flex flex-col to push footer to bottom if needed */
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            <Navbar />

            {/* 2. Content Wrapper: Added pt-12 (padding top) to give the Navbar breathing room */}
            <div className="flex-grow py-12 px-4 sm:px-10 lg:px-20">
                <div className="max-w-6xl mx-auto">

                    {/* Page Header */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold">About</h1>
                        <p className="text-gray-500 text-sm mt-1">Learn more about TransUs Drives</p>
                    </div>

                    {/* Layout Container */}
                    <div className="flex flex-col lg:flex-row gap-8 items-start">

                        {/* Main App Info Card */}
                        <div className="w-full lg:flex-[1.5] bg-white border border-gray-200 rounded-3xl p-6 lg:p-10">
                            <div className="flex flex-col">
                                {/* Icon and Title Row */}
                                <div className="flex items-center gap-6 mb-8">
                                    {/* Logo Mockup */}
                                    <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                                        <div className="w-10 h-10 border-4 border-gray-900 rounded-full relative">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-6 bg-gray-900 rotate-45"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-bold leading-tight">TransUs Drives</h2>
                                        <p className="text-gray-400 text-sm font-medium">Version 1.0.0</p>
                                    </div>
                                </div>

                                {/* Description Box - Matching screenshot style exactly */}
                                <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 lg:p-8">
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        Your trusted platform for car rentals and hosting.
                                        Connect with travelers and earn extra income by
                                        sharing your vehicle, or find the perfect ride for your
                                        next adventure.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Legal & Information Card */}
                        <div className="w-full lg:flex-1 bg-white border border-gray-200 rounded-3xl p-6 lg:p-10">
                            <h3 className="text-lg font-bold mb-6">Legal & Information</h3>

                            <div className="space-y-4">
                                {/* Terms of Service */}
                                <button className="w-full flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-2xl active:bg-gray-200 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gray-900 text-white rounded-xl">
                                            <FileText size={20} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-sm">Terms of Service</p>
                                            <p className="text-xs text-gray-500">Read our terms and conditions</p>
                                        </div>
                                    </div>
                                    <ExternalLink size={18} className="text-gray-400" />
                                </button>

                                {/* Privacy Policy */}
                                <button className="w-full flex items-center justify-between p-4 bg-gray-100 border border-gray-200 rounded-2xl active:bg-gray-200 transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-gray-900 text-white rounded-xl">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-semibold text-sm">Privacy Policy</p>
                                            <p className="text-xs text-gray-500">How we handle your data</p>
                                        </div>
                                    </div>
                                    <ExternalLink size={18} className="text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Footer */}
                    <div className="mt-16 pb-8 text-center border-t border-gray-200 pt-8">
                        <p className="text-gray-400 text-xs">
                            © 2025 TransUs Drives. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
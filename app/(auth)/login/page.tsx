import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon } from "lucide-react"
import { PageNavbar } from '@/components/layouts/page-navbar/PageNavbar'

export default function LogInPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <PageNavbar />
            {/* Centered container with spacing */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="flex w-full max-w-7xl h-[650px] bg-gray-50 rounded-3xl overflow-hidden shadow-lg">
                    {/* LEFT SIDE: Image background only (Hidden on Mobile) */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <Image
                            src="/img/hero-banner.jpg"
                            alt="Login Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Optional: dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </div>

                    {/* RIGHT SIDE: Responsive Form Section */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20">
                        <div className="w-full max-w-[420px] space-y-8">
                            <div className="text-left">
                                <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
                                <p className="text-gray-500 mt-2 font-medium">Welcome back! Please enter your details.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-gray-700 ml-1">Email address</Label>
                                    <Input
                                        placeholder="Enter your email"
                                        className="h-12 border-gray-200 rounded-xl bg-gray-50/30 focus-visible:ring-yellow-600 shadow-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center px-1">
                                        <Label className="text-sm font-bold text-gray-700">Password</Label>
                                        <button type="button" className="text-xs font-bold text-gray-900 hover:text-yellow-700">
                                            Forgot password?
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="h-12 border-gray-200 rounded-xl bg-gray-50/30 focus-visible:ring-yellow-600 shadow-none"
                                        />
                                        <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
                                    </div>
                                </div>

                                <Button className="w-full h-12 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-none">
                                    Log In
                                </Button>
                            </form>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-gray-200" />
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-gray-400">
                                    <span className="bg-gray-50 px-4">OR</span>
                                </div>
                            </div>

                            {/* Social Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Button variant="outline" type="button" className="h-12 border-gray-200 rounded-xl flex items-center justify-center gap-2 font-bold text-gray-700 hover:bg-gray-50 shadow-none">
                                    <Image src="/google-logo.png" alt="G" width={18} height={18} />
                                    <span>Google</span>
                                </Button>

                                <Button variant="outline" type="button" className="h-12 border-gray-200 rounded-xl flex items-center justify-center gap-2 font-bold text-gray-700 hover:bg-gray-50 shadow-none">
                                    <Image src="/apple-logo.png" alt="A" width={18} height={18} />
                                    <span>Apple</span>
                                </Button>
                            </div>

                            <p className="text-center text-sm text-gray-500 font-medium pt-4">
                                Don&apos;t have an account?{" "}
                                <Link href="/signup" className="text-gray-900 font-bold underline underline-offset-4 hover:text-yellow-700">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
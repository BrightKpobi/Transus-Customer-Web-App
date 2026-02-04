import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen w-full bg-white">
            {/* LEFT SIDE: Image background only (Hidden on Mobile) */}
            <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
                <Image
                    src="/img/hero-banner.jpg"
                    alt="Join our premium fleet"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* RIGHT SIDE: Responsive Form Section */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-20">
                <div className="w-full max-w-[420px] space-y-8">
                    <div className="text-left">
                        <h1 className="text-3xl font-black tracking-tight text-gray-900">Create Account</h1>
                        <p className="text-gray-500 mt-2 font-medium">Join us today and experience premium mobility.</p>
                    </div>

                    {/* Social Buttons Inlined at the top for Sign Up */}
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

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-100" />
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-gray-400">
                            <span className="bg-white px-4">OR USE EMAIL</span>
                        </div>
                    </div>

                    <form className="space-y-5">
                        <div className="space-y-2">
                            <Label className="text-sm font-bold text-gray-700 ml-1">Email address</Label>
                            <Input
                                placeholder="name@example.com"
                                className="h-12 border-gray-200 rounded-xl bg-gray-50/30 focus-visible:ring-yellow-600 shadow-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label className="text-sm font-bold text-gray-700 ml-1">Password</Label>
                            <Input
                                type="password"
                                placeholder="Create a strong password"
                                className="h-12 border-gray-200 rounded-xl bg-gray-50/30 focus-visible:ring-yellow-600 shadow-none"
                            />
                        </div>

                        <Button className="w-full h-12 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow-none">
                            Create an account
                        </Button>

                        <div className="flex items-start gap-3 px-1 pt-2">
                            <div className="flex items-center h-5">
                                <input
                                    type="checkbox"
                                    id="updates"
                                    className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-600 cursor-pointer"
                                />
                            </div>
                            <label htmlFor="updates" className="text-[11px] text-gray-500 leading-relaxed cursor-pointer font-medium select-none">
                                Please keep me updated by email with the latest news, research findings, reward programs, event updates.
                            </label>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-500 font-medium pt-4">
                        Already have an account?{" "}
                        <a href="/login" className="text-gray-900 font-bold underline underline-offset-4 hover:text-yellow-700">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
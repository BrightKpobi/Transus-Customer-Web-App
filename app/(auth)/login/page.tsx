'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react"
import { PageNavbar } from '@/components/layouts/page-navbar/PageNavbar'
import { useAuth } from '@/contexts/AuthContext'

export default function LogInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    
    const { login } = useAuth()
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        
        if (!email || !password) {
            setError('Please enter both email and password')
            return
        }

        setIsLoading(true)
        
        try {
            const success = await login(email, password)
            if (success) {
                // Delay redirect to let toast show
                setTimeout(() => {
                    router.push('/')
                }, 1000)
            } else {
                setError('Invalid email or password')
            }
        } catch {
            setError('An error occurred. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
            <PageNavbar />
            {/* Centered container with spacing */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="flex w-full max-w-7xl h-[650px] bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg dark:shadow-gray-900/50">
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
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Sign In</h2>
                                <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">Welcome back! Please enter your details.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {error && (
                                    <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                                        <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <Label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email address</Label>
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email ?? ''}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-12 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/30 dark:bg-gray-800 focus-visible:ring-yellow-600 shadow-none dark:text-gray-100 dark:placeholder:text-gray-500"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center px-1">
                                        <Label className="text-sm font-bold text-gray-700 dark:text-gray-300">Password</Label>
                                        <Link href="/forgot-password" className="text-xs font-bold text-gray-900 dark:text-gray-100 hover:text-yellow-700 dark:hover:text-yellow-500">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={password ?? ''}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="h-12 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50/30 dark:bg-gray-800 focus-visible:ring-yellow-600 shadow-none dark:text-gray-100 dark:placeholder:text-gray-500"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2"
                                        >
                                            {showPassword ? (
                                                <EyeOffIcon className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
                                            ) : (
                                                <EyeIcon className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <Button 
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full h-12 bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold rounded-xl shadow-none disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Signing in...
                                        </>
                                    ) : (
                                        'Log In'
                                    )}
                                </Button>
                            </form>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-gray-200 dark:border-gray-700" />
                                </div>
                                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest text-gray-400 dark:text-gray-500">
                                    <span className="bg-gray-50 dark:bg-gray-900 px-4">OR</span>
                                </div>
                            </div>

                            {/* Social Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Button variant="outline" type="button" className="h-12 border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center gap-2 font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-none">
                                    <Image src="/google-logo.png" alt="G" width={18} height={18} />
                                    <span>Google</span>
                                </Button>

                                <Button variant="outline" type="button" className="h-12 border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center gap-2 font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-none">
                                    <Image src="/apple-logo.png" alt="A" width={18} height={18} />
                                    <span>Apple</span>
                                </Button>
                            </div>

                            <p className="text-center text-sm text-gray-500 dark:text-gray-400 font-medium pt-4">
                                Don&apos;t have an account?{" "}
                                <Link href="/signup" className="text-gray-900 dark:text-gray-100 font-bold underline underline-offset-4 hover:text-yellow-700 dark:hover:text-yellow-500">
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
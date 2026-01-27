'use client'

import React, { useState, useRef } from 'react'
import { User, Calendar, Camera, CheckCircle2 } from 'lucide-react'

// Shadcn UI Components
import { PageNavbar } from '@/components/layouts/page-navbar/PageNavbar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PersonalInfoPage() {
    const [gender, setGender] = useState<'male' | 'female'>('male')
    const [profileImage, setProfileImage] = useState<string | null>(null)

    // Ref for the hidden file input
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Handle Image Selection
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const triggerFileInput = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="min-h-screen bg-gray-50/50">
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <PageNavbar title="Personal Information" titlePosition="center" />
            </div>

            <main className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Side: Avatar Card */}
                    <div className="lg:col-span-4">
                        <Card className="rounded-2xl border-gray-100 shadow-none">
                            <CardHeader>
                                <CardTitle className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                                    Profile Photo
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center pb-8">
                                <div className="relative">
                                    {/* Hidden Input */}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImageChange}
                                        accept="image/*"
                                        className="hidden"
                                    />

                                    <div
                                        className="h-44 w-44 bg-gray-50 rounded-[2.5rem] flex items-center justify-center border border-gray-100 overflow-hidden cursor-pointer group"
                                        onClick={triggerFileInput}
                                    >
                                        {profileImage ? (
                                            <img src={profileImage} alt="Profile" className="h-full w-full object-cover transition-transform group-hover:scale-110" />
                                        ) : (
                                            <User size={70} className="text-gray-200" />
                                        )}
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] flex items-center justify-center">
                                            <p className="text-white text-xs font-bold uppercase">Change</p>
                                        </div>
                                    </div>

                                    <Button
                                        size="icon"
                                        onClick={triggerFileInput}
                                        className="absolute bottom-2 right-2 rounded-full bg-yellow-600 hover:bg-yellow-500 text-black shadow-none h-12 w-12 border-4 border-white"
                                    >
                                        <Camera size={20} />
                                    </Button>
                                </div>

                                <div className="mt-8 text-center">
                                    <p className="text-lg font-bold text-gray-900 uppercase tracking-tight">Username</p>
                                    <p className="text-sm text-gray-400 font-medium mt-1 italic">username@gmail.com</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Side: Form Card */}
                    <div className="lg:col-span-8">
                        <Card className="rounded-2xl border-gray-100 shadow-none p-2 md:p-6">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-10">
                                <CardTitle className="text-2xl font-bold uppercase tracking-tighter text-gray-900">
                                    Account Details
                                </CardTitle>
                                <CheckCircle2 className="text-yellow-600" size={24} />
                            </CardHeader>

                            <CardContent>
                                <form className="space-y-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1">First Name</Label>
                                            <div className="relative">
                                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 z-10" />
                                                <Input
                                                    placeholder="Username"
                                                    className="h-14 rounded-2xl bg-gray-50 border-transparent pl-12 focus-visible:ring-yellow-600 focus-visible:bg-white transition-all shadow-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1">Last Name</Label>
                                            <div className="relative">
                                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 z-10" />
                                                <Input
                                                    placeholder="User_Surname"
                                                    className="h-14 rounded-2xl bg-gray-50 border-transparent pl-12 focus-visible:ring-yellow-600 focus-visible:bg-white transition-all shadow-none"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1">Date of Birth</Label>
                                        <div className="relative">
                                            <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 z-10" />
                                            <Input
                                                placeholder="Jan 01, 2000"
                                                className="h-14 rounded-2xl bg-gray-50 border-transparent pl-12 focus-visible:ring-yellow-600 focus-visible:bg-white transition-all shadow-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1">Gender</Label>
                                        <div className="flex gap-4">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => setGender('male')}
                                                className={`flex-1 h-14 rounded-2xl font-bold border-2 transition-all ${gender === 'male'
                                                        ? 'bg-yellow-50 border-yellow-600 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-600'
                                                        : 'bg-white border-gray-100 text-gray-400 hover:bg-gray-50'
                                                    }`}
                                            >
                                                Male
                                            </Button>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => setGender('female')}
                                                className={`flex-1 h-14 rounded-2xl font-bold border-2 transition-all ${gender === 'female'
                                                        ? 'bg-yellow-50 border-yellow-600 text-yellow-600 hover:bg-yellow-50 hover:text-yellow-600'
                                                        : 'bg-white border-gray-100 text-gray-400 hover:bg-gray-50'
                                                    }`}
                                            >
                                                Female
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <Button className="w-full h-16 bg-gray-900 text-white font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-yellow-600 hover:text-black transition-all active:scale-[0.98] shadow-none">
                                            Save Changes
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
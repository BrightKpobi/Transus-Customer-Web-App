'use client'

import React, { useState, useRef } from 'react'
import { CreditCard, Upload, CheckCircle2, Loader2, CheckCircle } from 'lucide-react'

// Shadcn UI Components

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function LicenseVerifyPage() {
    const [frontImage, setFrontImage] = useState<string | null>(null)
    const [backImage, setBackImage] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const frontInputRef = useRef<HTMLInputElement>(null)
    const backInputRef = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, side: 'front' | 'back') => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if (side === 'front') setFrontImage(reader.result as string)
                else setBackImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
    }

    return (
        <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950 pb-20 font-sans">


            <main className="mx-auto max-w-7xl px-4 py-12">
                <div className="space-y-8">

                    {/* Verified Status Banner */}
                    <div className="flex items-center gap-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-xl">
                        <div className="bg-green-600 rounded-full p-1">
                            <CheckCircle className="text-white" size={18} />
                        </div>
                        <div>
                            <p className="text-green-800 dark:text-green-400 font-bold text-sm">Verified</p>
                            <p className="text-green-700 dark:text-green-500 text-xs">Your driver's license has been verified</p>
                        </div>
                    </div>

                    {/* Header Section */}
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold uppercase text-gray-900 dark:text-gray-100">Update Your Driver's License</h1>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">You can update your driver's license by uploading new images. At least one image is required</p>
                    </div>

                    <Card className="rounded-2xl border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-none overflow-hidden max-w-7xl mx-auto border">
                        <CardHeader className="bg-white dark:bg-gray-900 border-b border-gray-50 dark:border-gray-800 p-8">
                            <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 block">Select Document Type</Label>

                            {/* Document Type Dropdown */}
                            <Select defaultValue="drivers-license">
                                <SelectTrigger className="w-full h-16 rounded-2xl border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-6 focus:ring-yellow-600 transition-all dark:text-gray-100">
                                    <div className="flex items-center gap-4 w-full">
                                        {/* Icon: White on Dark Background */}
                                        <div className="p-2 bg-amber-500 dark:bg-gray-700 rounded-lg text-white flex-shrink-0">
                                            <CreditCard size={20} />
                                        </div>
                                        <span className="font-bold uppercase text-sm flex-1 text-left">
                                            <SelectValue placeholder="Select document" />
                                        </span>
                                    </div>
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-gray-100 dark:border-gray-700 shadow-xl bg-white dark:bg-gray-800 z-50" align="start" side="bottom" sideOffset={8}>
                                    <SelectItem value="drivers-license" className="py-3 font-bold uppercase text-xs tracking-tight dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                                        Driver's License
                                    </SelectItem>
                                    <SelectItem value="passport" className="py-3 font-bold uppercase text-xs tracking-tight dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                                        International Passport
                                    </SelectItem>
                                    <SelectItem value="national-id" className="py-3 font-bold uppercase text-xs tracking-tight dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                                        National ID Card
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </CardHeader>

                        <CardContent className="p-8 space-y-8">
                            {/* Grid Layout for Uploads */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Front Side */}
                                <div className="space-y-4">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-1">Front of Document</Label>
                                    <input
                                        type="file"
                                        ref={frontInputRef}
                                        onChange={(e) => handleFileChange(e, 'front')}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                    <div
                                        onClick={() => frontInputRef.current?.click()}
                                        className={`relative aspect-[3/2] w-full rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden ${frontImage ? 'border-yellow-600 bg-white dark:bg-gray-800' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                    >
                                        {frontImage ? (
                                            <>
                                                <img src={frontImage} alt="Front ID" className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                                    <Button variant="secondary" size="sm" className="rounded-full font-bold uppercase text-[10px]">Change Image</Button>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-center space-y-2">
                                                <div className="p-4 bg-white dark:bg-gray-700 rounded-full inline-block shadow-sm">
                                                    <Upload className="text-yellow-600" size={24} />
                                                </div>
                                                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Click to upload front</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="space-y-4">
                                    <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-1">Back of Document</Label>
                                    <input
                                        type="file"
                                        ref={backInputRef}
                                        onChange={(e) => handleFileChange(e, 'back')}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                    <div
                                        onClick={() => backInputRef.current?.click()}
                                        className={`relative aspect-[3/2] w-full rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden ${backImage ? 'border-yellow-600 bg-white dark:bg-gray-800' : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                                    >
                                        {backImage ? (
                                            <>
                                                <img src={backImage} alt="Back ID" className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                                    <Button variant="secondary" size="sm" className="rounded-full font-bold uppercase text-[10px]">Change Image</Button>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-center space-y-2">
                                                <div className="p-4 bg-white dark:bg-gray-700 rounded-full inline-block shadow-sm">
                                                    <Upload className="text-yellow-600" size={24} />
                                                </div>
                                                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Click to upload back</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Guidelines */}
                            <div className="bg-yellow-50/50 dark:bg-yellow-900/20 p-6 rounded-2xl border border-yellow-100 dark:border-yellow-900/30">
                                <h4 className="text-xs font-black text-yellow-800 dark:text-yellow-500 uppercase mb-3 tracking-widest">Upload Guidelines</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-yellow-700 dark:text-yellow-600 uppercase tracking-tighter">
                                        <CheckCircle2 size={14} /> Clear Details
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-yellow-700 dark:text-yellow-600 uppercase tracking-tighter">
                                        <CheckCircle2 size={14} /> No Glares/Blur
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-yellow-700 dark:text-yellow-600 uppercase tracking-tighter">
                                        <CheckCircle2 size={14} /> JPG, PNG (Max 5MB)
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-yellow-700 dark:text-yellow-600 uppercase tracking-tighter">
                                        <CheckCircle2 size={14} /> Original Color
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Submit Button */}
                            <Button
                                onClick={handleSubmit}
                                disabled={(!frontImage && !backImage) || isSubmitting}
                                className="w-full h-16 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-yellow-600 hover:text-black transition-all active:scale-[0.98] disabled:opacity-50 disabled:bg-gray-200 dark:disabled:bg-gray-700 shadow-none"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="animate-spin" size={20} />
                                        <span>Submitting...</span>
                                    </div>
                                ) : (
                                    "Submit for Verification"
                                )}
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
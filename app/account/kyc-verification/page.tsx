'use client'

import React, { useState, useRef } from 'react'
import { CreditCard, Upload, X, CheckCircle2, FileText, Image as ImageIcon } from 'lucide-react'

// Shadcn UI Components
import Navbar from '@/components/layouts/navbar/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function KYCPage() {
    const [frontImage, setFrontImage] = useState<string | null>(null)
    const [backImage, setBackImage] = useState<string | null>(null)

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

    return (
        <div className="min-h-screen bg-gray-50/50 pb-20">
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <Navbar />
            </div>

            <main className="mx-auto max-w-7xl px-4 py-12">
                <div className="space-y-8">

                    {/* Header Section */}
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-black uppercase tracking-tighter text-gray-900">Update your ID</h1>
                        <p className="text-gray-500 font-medium">Please upload clear images of your government-issued document.</p>
                    </div>

                    <Card className="rounded-2xl border-gray-100 shadow-none overflow-hidden">
                        <CardHeader className="bg-white border-b border-gray-50 p-8">
                            <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4 block">Document Type</Label>
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-transparent">
                                <div className="p-2 bg-yellow-600 rounded-lg text-black">
                                    <CreditCard size={20} />
                                </div>
                                <span className="font-bold text-gray-900 uppercase tracking-tight">Driver's License</span>
                                <CheckCircle2 className="ml-auto text-yellow-600" size={20} />
                            </div>
                        </CardHeader>

                        <CardContent className="p-8 space-y-10">

                            {/* Front of License */}
                            <div className="space-y-4">
                                <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1">Front of License (Required)</Label>
                                <input
                                    type="file"
                                    ref={frontInputRef}
                                    onChange={(e) => handleFileChange(e, 'front')}
                                    className="hidden"
                                    accept="image/*"
                                />

                                <div
                                    onClick={() => frontInputRef.current?.click()}
                                    className={`relative aspect-[16/9] w-full rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden ${frontImage ? 'border-yellow-600' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                                        }`}
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
                                            <div className="p-4 bg-white rounded-full inline-block shadow-sm border border-gray-100">
                                                <Upload className="text-yellow-600" size={24} />
                                            </div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Click to upload front</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Back of License */}
                            <div className="space-y-4">
                                <Label className="text-[11px] font-bold uppercase tracking-widest text-gray-400 px-1">Back of License (Required)</Label>
                                <input
                                    type="file"
                                    ref={backInputRef}
                                    onChange={(e) => handleFileChange(e, 'back')}
                                    className="hidden"
                                    accept="image/*"
                                />

                                <div
                                    onClick={() => backInputRef.current?.click()}
                                    className={`relative aspect-[16/9] w-full rounded-2xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden ${backImage ? 'border-yellow-600' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                                        }`}
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
                                            <div className="p-4 bg-white rounded-full inline-block shadow-sm border border-gray-100">
                                                <Upload className="text-yellow-600" size={24} />
                                            </div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Click to upload back</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Important Notes */}
                            <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                                <h4 className="text-sm font-black text-yellow-800 uppercase mb-2 tracking-tight">Upload Guidelines:</h4>
                                <ul className="text-xs text-yellow-700/80 space-y-2 font-medium">
                                    <li className="flex items-center gap-2">• Ensure all details are clearly visible</li>
                                    <li className="flex items-center gap-2">• No glares or blurry corners</li>
                                    <li className="flex items-center gap-2">• Supported formats: JPG, PNG (Max 5MB)</li>
                                </ul>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <Button
                                    disabled={!frontImage || !backImage}
                                    className="w-full h-16 bg-gray-900 text-white font-bold uppercase tracking-[0.3em] rounded-2xl hover:bg-yellow-600 hover:text-black transition-all active:scale-[0.98] disabled:opacity-50 disabled:bg-gray-200 disabled:text-gray-400 shadow-none"
                                >
                                    Submit for Verification
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
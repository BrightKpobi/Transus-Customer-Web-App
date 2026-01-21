import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone, Apple, Facebook, Youtube, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo Section */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image
                                src="/img/logos/transus-yellow-logo.svg"
                                alt="TransUs Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2 text-gray-700">
                                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>123 Main Street, Accra</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Mail className="w-5 h-5 flex-shrink-0" />
                                <span>info@transusdrives.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Phone className="w-5 h-5 flex-shrink-0" />
                                <span>+233 55 974 833 2</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Phone className="w-5 h-5 flex-shrink-0" />
                                <span>+233 55 508 644 2</span>
                            </div>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Information</h3>
                        <ul className="space-y-2">
                            <li><Link href="/help" className="text-gray-700 hover:text-gray-900 underline-offset-4 hover:underline transition">Help</Link></li>
                            <li><Link href="/guidelines" className="text-gray-700 hover:text-gray-900 underline-offset-4 hover:underline transition">Guidelines</Link></li>
                            <li><Link href="/privacy-policy" className="text-gray-700 hover:text-gray-900 underline-offset-4 hover:underline transition">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-use" className="text-gray-700 hover:text-gray-900 underline-offset-4 hover:underline transition">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Download App & Social Media */}
                <div className="mt-12 flex flex-wrap items-center gap-6">
                    <span className="text-gray-900 font-semibold">Download the App</span>
                    <div className="flex items-center gap-4">
                        <Link href="https://apps.apple.com" target="_blank" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                            <svg
                                width="23px"
                                height="28px"
                                viewBox="0 0 23 28"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="apple" fill="none" fillRule="evenodd">
                                    <path
                                        id="apple-leaf"
                                        d="M15.657 4.468c.967-1.191 1.63-2.812 1.445-4.457-1.4.06-3.15.954-4.158 2.119-.892 1.027-1.69 2.71-1.483 4.293 1.572.115 3.187-.782 4.196-1.955z"
                                        fill="#858c94"
                                    ></path>
                                    <g transform="translate(0 6.496)">
                                        <path
                                            id="apple-logo"
                                            d="M19.199 8.305c-.033-3.514 2.92-5.223 3.055-5.303C20.582.601 17.99.272 17.08.246 14.902.021 12.791 1.53 11.682 1.53 10.55 1.53 8.843.27 7.002.305 4.635.341 2.42 1.692 1.205 3.79-1.304 8.066.566 14.351 2.969 17.807c1.202 1.693 2.606 3.584 4.444 3.517 1.799-.073 2.47-1.13 4.64-1.13 2.151 0 2.782 1.13 4.657 1.088 1.93-.03 3.145-1.701 4.305-3.41 1.389-1.94 1.946-3.85 1.968-3.949-.045-.015-3.748-1.407-3.784-5.618z"
                                            fill="#858c94"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                        <Link href="https://play.google.com" target="_blank" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                            <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626c.474.274.474 1.017 0 1.29l-2.807 1.626-2.524-2.521 2.524-2.021zm-3.199-1.51l-8.635-8.635 10.937 6.333-2.302 2.302z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex items-center gap-3 ml-auto">
                        <Link href="https://www.facebook.com/share/16VBgGqkjb/?mibextid=wwXIfrs://www.facebook.com/share/16VBgGqkjb/?mibextid=wwXIfr" target="_blank" className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition">
                            <Facebook className="w-5 h-5 text-gray-700" />
                        </Link>
                        <Link href="https://x.com/TransusD" target="_blank" className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition">
                            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                        {/* <Link href="https://www.instagram.com/transusdrives/" target="_blank" className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition">
                            <Youtube className="w-5 h-5 text-gray-700" />
                        </Link> */}
                        <Link href="https://www.instagram.com/transusdrives/" target="_blank" className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition">
                            <Instagram className="w-5 h-5 text-gray-700" />
                        </Link>
                        <Link href="https://www.tiktok.com/@transusdrives?_r=1&_t=ZM-92W4IRW4GS3" target="_blank" className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition">
                            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
                    © 2025 Transus. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
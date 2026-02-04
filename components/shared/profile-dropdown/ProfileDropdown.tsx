"use client";

import * as React from "react";
import Link from "next/link";
import {
    Menu,
    UserCircle,
    Heart,
    Navigation,
    MessageSquare,
    User,
    Car,
    Gift,
    Headset,
    LogOut,
    LogIn,
    UserPlus,
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfileDropdown() {
    // 🔐 Replace with real auth state
    const isAuthenticated = false;

    const handleLogout = () => {
        console.log("Logging out...");
    };

    const itemClass =
        "cursor-pointer hover:bg-gray-50 focus:bg-gray-50 transition-colors";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    suppressHydrationWarning
                    className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 hover:shadow-md transition bg-white outline-none"
                >
                    <Menu size={18} />
                    <UserCircle size={22} className="text-gray-500" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-56 mt-2 bg-white border border-gray-200 shadow-xl rounded-xl z-[100]"
            >
                {/* Kelvin note this : NOT AUTHENTICATED  */}
                {!isAuthenticated && (
                    <>
                        <DropdownMenuGroup className="py-1">
                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/login" className="flex items-center">
                                    <LogIn className="mr-2 h-4 w-4 text-gray-500" />
                                    <span className="font-medium text-sm">Sign in</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/signup" className="flex items-center">
                                    <UserPlus className="mr-2 h-4 w-4 text-gray-500" />
                                    <span className="font-medium text-sm">Sign up</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />

                        <DropdownMenuGroup className="py-1">
                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/gift-cards" className="flex items-center">
                                    <Gift className="mr-2 h-4 w-4 text-gray-500" />
                                    <span className="font-medium text-sm">Gift cards</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/help" className="flex items-center">
                                    <Headset className="mr-2 h-4 w-4 text-gray-500" />
                                    <span className="font-medium text-sm">Get help</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </>
                )}

                {/* Kelvin kindly note this too: AUTHENTICATED USER  */}
                {isAuthenticated && (
                    <>
                        <DropdownMenuGroup className="py-1">
                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/favorites" className="flex items-center">
                                    <Heart className="mr-2 h-4 w-4 text-gray-500" />
                                    <span className="font-medium text-sm">Favorites</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/trip" className="flex items-center">
                                    <Navigation className="mr-2 h-4 w-4 text-gray-500" />
                                    <span className="font-medium text-sm">Trip</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/notifications" className="flex items-center">
                                    <MessageSquare className="mr-2 h-4 w-4 text-gray-500" />
                                    <span className="font-medium text-sm">Inbox</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />

                        <DropdownMenuGroup className="py-1">
                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/account" className="flex items-center">
                                    <User className="mr-2 h-4 w-4 text-gray-500" />
                                    <span className="font-medium text-sm">Account</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/host" className="flex items-center">
                                    <Car className="mr-2 h-4 w-4 text-gray-500" />
                                    <span className="font-medium text-sm">Become a host</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-gray-50 focus:bg-gray-50 transition-colors">
                            <button
                                onClick={handleLogout}
                                className="flex items-center w-full"
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                <span className="font-bold text-sm">Log out</span>
                            </button>
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

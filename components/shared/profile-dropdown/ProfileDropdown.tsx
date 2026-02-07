"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { useAuth } from "@/contexts/AuthContext";

export default function ProfileDropdown() {
    const { isAuthenticated, logout, user } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const itemClass =
        "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 transition-colors";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    suppressHydrationWarning
                    className="flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1.5 hover:shadow-md transition bg-white dark:bg-gray-900 outline-none"
                >
                    <Menu size={18} className="text-gray-700 dark:text-gray-300" />
                    <UserCircle size={22} className="text-gray-500 dark:text-gray-400" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-56 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl z-[100]"
            >
                {/* Kelvin note this : NOT AUTHENTICATED  */}
                {!isAuthenticated && (
                    <>
                        <DropdownMenuGroup className="py-1">
                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/login" className="flex items-center">
                                    <LogIn className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Sign in</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/signup" className="flex items-center">
                                    <UserPlus className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Sign up</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />

                        <DropdownMenuGroup className="py-1">
                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/gift-cards" className="flex items-center">
                                    <Gift className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Gift cards</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/help" className="flex items-center">
                                    <Headset className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Get help</span>
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
                                    <Heart className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Favorites</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/trip" className="flex items-center">
                                    <Navigation className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Trip</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/notifications" className="flex items-center">
                                    <MessageSquare className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Inbox</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />

                        <DropdownMenuGroup className="py-1">
                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/account" className="flex items-center">
                                    <User className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Account</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild className={itemClass}>
                                <Link href="/host" className="flex items-center">
                                    <Car className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                                    <span className="font-medium text-sm text-gray-900 dark:text-gray-100">Become a host</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />

                        <DropdownMenuItem className="cursor-pointer text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 transition-colors">
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

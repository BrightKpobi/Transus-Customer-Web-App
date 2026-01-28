"use client";

import * as React from "react";
import { useState, useEffect } from "react";
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
    FileText,
    LogOut,
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
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const TriggerButton = (
        <button className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 hover:shadow-md transition bg-white outline-none">
            <Menu size={18} />
            <UserCircle size={22} className="text-gray-500" />
        </button>
    );

    if (!mounted) {
        return TriggerButton;
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {TriggerButton}
            </DropdownMenuTrigger>

            {/* Added bg-white, border, and shadow-xl to fix transparency */}
            <DropdownMenuContent
                align="end"
                className="w-56 mt-2 bg-white border border-gray-200 shadow-xl rounded-xl z-[100]"
            >
                <DropdownMenuGroup className="py-1">
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <Heart className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="font-medium text-sm">Favorites</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <Navigation className="mr-2 h-4 w-4 text-gray-500" />
                        <Link href={"/trip"}>
                            <p className="font-medium text-sm">Trip</p>
                        </Link>

                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <MessageSquare className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="font-medium text-sm">Inbox</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-gray-100" />

                <DropdownMenuGroup className="py-1">
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <User className="mr-2 h-4 w-4 text-gray-500" />
                        <Link href={"/account"}>
                            <p className="font-medium text-sm">Account</p>
                        </Link>

                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <Car className="mr-2 h-4 w-4 text-gray-500" />
                        <Link href={"/host"}>
                            <p className="font-medium text-sm">Become a host</p>
                        </Link>

                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-gray-100" />

                <DropdownMenuGroup className="py-1">
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <Gift className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="font-medium text-sm text-gray-600">Gift cards</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-gray-50 transition-colors">
                        <Headset className="mr-2 h-4 w-4 text-gray-500" />
                        <span className="font-medium text-sm text-gray-600">Get help</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator className="bg-gray-100" />

                <DropdownMenuItem className="cursor-pointer py-2 text-red-600 focus:text-red-600 focus:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span className="font-bold text-sm">Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
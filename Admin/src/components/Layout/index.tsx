import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from '@/components/app-sidebar';

import { Separator } from '@/components/ui/separator';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { LogOut, Check, ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useAtom } from 'jotai';
import { LangAtom } from '@/lib/State';

export default function AppLayout() {
    const [currentLanguage, setCurrentLanguage] = useAtom(LangAtom);

    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logging out...');
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Language Selector */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 gap-1 px-2"
                                >
                                    {currentLanguage}
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-16">
                                {['az', 'en', 'ru'].map((lang) => (
                                    <DropdownMenuItem
                                        key={lang}
                                        className="flex items-center justify-between"
                                        onClick={() => setCurrentLanguage(lang)}
                                    >
                                        {lang}
                                        {currentLanguage === lang && (
                                            <Check className="h-4 w-4 ml-2" />
                                        )}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Logout Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleLogout}
                            aria-label="Log out"
                        >
                            <LogOut className="h-4 w-4" />
                        </Button>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}

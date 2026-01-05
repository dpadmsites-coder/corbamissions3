"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/hooks/use-scroll";
import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
    const [open, setOpen] = useState(false);
    const scrolled = useScroll(50);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center transition-all duration-500 ease-out">
            <div
                className={cn(
                    "transition-all duration-500 ease-out flex items-center justify-between",
                    scrolled
                        ? "mt-4 bg-background/70 backdrop-blur-xl shadow-lg rounded-full px-6 py-3 border border-border/30 max-w-fit gap-6"
                        : "mt-0 bg-transparent w-full container mx-auto py-5"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center z-50 shrink-0" onClick={closeMenu}>
                    <div className={cn(
                        "relative transition-all duration-300",
                        scrolled ? "h-8 w-24" : "h-10 w-32"
                    )}>
                        <Image
                            src="/corba-logo.png"
                            alt="Corbã Missions"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    <Link
                        href="/"
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50",
                            scrolled ? "px-4 py-2 text-sm" : "px-5 py-2"
                        )}
                    >
                        Início
                    </Link>
                    <Link
                        href="/sobre"
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50",
                            scrolled ? "px-4 py-2 text-sm" : "px-5 py-2"
                        )}
                    >
                        Sobre Nós
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className={cn(
                                buttonVariants({ variant: "ghost" }),
                                "rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 gap-1 outline-none",
                                scrolled ? "px-4 py-2 text-sm" : "px-5 py-2"
                            )}
                        >
                            Missões <ChevronDown className="w-4 h-4 opacity-50" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="min-w-[150px] p-2 rounded-xl bg-background/95 backdrop-blur-md border-border">
                            <DropdownMenuItem asChild>
                                <Link href="/missoes/brasil" className="w-full cursor-pointer rounded-lg px-4 py-2 hover:bg-muted font-medium">Brasil</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/missoes/australia" className="w-full cursor-pointer rounded-lg px-4 py-2 hover:bg-muted font-medium">Austrália</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link
                        href="/podcast"
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50",
                            scrolled ? "px-4 py-2 text-sm" : "px-5 py-2"
                        )}
                    >
                        Podcast
                    </Link>
                    <Link
                        href="/contato"
                        className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50",
                            scrolled ? "px-4 py-2 text-sm" : "px-5 py-2"
                        )}
                    >
                        Contato
                    </Link>
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block shrink-0">
                    <Link href="/contato">
                        <Button
                            variant="hero"
                            size={scrolled ? "sm" : "default"}
                            className="transition-all duration-300"
                        >
                            Apoie a Missão
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setOpen(!open)} className="md:hidden z-50">
                    <MenuToggleIcon open={open} className="size-8" />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-40 bg-background/98 backdrop-blur-lg transition-all duration-500 md:hidden",
                    open
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div
                    className={cn(
                        "flex flex-col items-center justify-center h-full transition-all duration-500",
                        open ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    )}
                >
                    <nav className="flex flex-col items-center gap-6 mb-10 text-center">
                        <Link
                            href="/"
                            className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                            onClick={closeMenu}
                        >
                            Início
                        </Link>
                        <Link
                            href="/sobre"
                            className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                            onClick={closeMenu}
                        >
                            Sobre Nós
                        </Link>

                        <div className="flex flex-col items-center gap-4 py-2">
                            <span className="text-lg font-medium text-muted-foreground uppercase tracking-wider">Missões</span>
                            <Link
                                href="/missoes/brasil"
                                className="text-2xl font-medium text-foreground hover:text-primary transition-colors pl-4 border-l-2 border-primary/20"
                                onClick={closeMenu}
                            >
                                Brasil
                            </Link>
                            <Link
                                href="/missoes/australia"
                                className="text-2xl font-medium text-foreground hover:text-primary transition-colors pl-4 border-l-2 border-primary/20"
                                onClick={closeMenu}
                            >
                                Austrália
                            </Link>
                        </div>

                        <Link
                            href="/podcast"
                            className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                            onClick={closeMenu}
                        >
                            Podcast
                        </Link>
                        <Link
                            href="/contato"
                            className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                            onClick={closeMenu}
                        >
                            Contato
                        </Link>
                    </nav>

                    <div className="flex flex-col items-center gap-4">
                        <Link href="/contato" onClick={closeMenu}>
                            <Button
                                variant="hero"
                                size="lg"
                            >
                                Apoie a Missão
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

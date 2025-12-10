"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Import komponen Shadcn
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Service", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between bg-white relative z-50 font-sans">
        
        {/* BAGIAN 1: LOGO UTAMA */}
        <Link href="/" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/logo-dexter.png"
            alt="Dexter League"
            width={180} 
            height={55}
            className="object-contain h-10 w-auto lg:h-14" 
            priority
          />
        </Link>

        {/* BAGIAN 2: MENU DESKTOP (Tampil di layar besar) */}
        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  {/* FIX: Gunakan asChild agar Link Next.js tidak bentrok */}
                  <NavigationMenuLink asChild>
                    <Link 
                      href={link.href} 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "!text-lg font-medium bg-transparent hover:bg-transparent hover:text-pink-600 focus:bg-transparent",
                        link.name === "Home" && "text-pink-600 font-bold"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Tombol Action Desktop */}
          <Button 
            asChild 
            className="bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-full px-8 py-6 font-bold text-base shadow-md ml-4"
          >
            <Link href="/contact-us">
              #tell us your story
            </Link>
          </Button>
        </div>

        {/* BAGIAN 3: TOMBOL HAMBURGER (Tampil di layar kecil/tablet) */}
        <div className="lg:hidden -mr-2">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            style={{ width: '56px', height: '56px' }}
            className="p-0 hover:bg-gray-100 rounded-lg text-gray-700 transition-transform"
          >
            {isOpen ? (
                <X style={{ width: '32px', height: '32px' }} />
            ) : (
                <Menu style={{ width: '32px', height: '32px' }} />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* BAGIAN 4: MENU OVERLAY MOBILE (Isi Hamburger Menu) */}
      {isOpen && (
        <div className="lg:hidden fixed top-24 left-0 w-full bg-white z-40 shadow-2xl border-b border-gray-200 flex flex-col items-center py-10 gap-8 animate-in fade-in slide-in-from-top-2 font-sans">
            <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
                <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-xl font-medium text-gray-700 hover:text-pink-600 transition-colors"
                >
                {link.name}
                </Link>
            ))}
            </nav>

            {/* Tombol Action Mobile */}
            <Button 
            asChild 
            onClick={toggleMenu}
            className="bg-[#E91E63] hover:bg-[#D81B60] text-white rounded-md w-4/5 max-w-sm py-6 text-lg font-bold shadow-md"
            >
            <Link href="/contact-us">
                #TellUsYourStory
            </Link>
            </Button>
        </div>
      )}
    </header>
  );
}
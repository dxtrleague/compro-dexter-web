"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
  const pathname = usePathname(); 
  const toggleMenu = () => setIsOpen(!isOpen);

  // Variable 'isContactPage' SUDAH DIHAPUS karena tombol mau ditampilkan terus

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact-us" },
  ];

  // Logic cek link aktif
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between bg-transparent relative z-50 font-poppins">
        
        {/* LOGO */}
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

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuLink asChild>
                    <Link 
                      href={link.href} 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        // Base Style
                        "!text-lg font-medium bg-transparent hover:bg-transparent hover:text-primary focus:bg-transparent transition-colors",
                        // Active State
                        isActive(link.href) 
                          ? "!text-primary font-bold" 
                          : "text-gray-600"
                      )}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* --- TOMBOL DESKTOP --- */}
          {/* Kondisi '!isContactPage' dihapus, tombol selalu muncul */}
          <Button 
            asChild 
            className="bg-primary hover:bg-[#D81B60] text-white rounded-full px-8 py-6 font-bold text-base shadow-md ml-4 transition-transform hover:scale-105"
          >
            <Link href="#tell-us-your-story">
              #tell us your story
            </Link>
          </Button>
        </div>

        {/* --- MOBILE HAMBURGER --- */}
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

      {/* --- MOBILE MENU OVERLAY --- */}
      {isOpen && (
        <div className="lg:hidden fixed top-24 left-0 w-full bg-white z-40 shadow-2xl border-b border-gray-200 flex flex-col items-center py-10 gap-8 animate-in fade-in slide-in-from-top-2 font-poppins">
            <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
                <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className={cn(
                    "text-xl font-medium transition-colors hover:text-primary",
                    isActive(link.href) 
                      ? "text-primary font-bold" 
                      : "text-gray-700"
                )}
                >
                {link.name}
                </Link>
            ))}
            </nav>

            {/* --- TOMBOL MOBILE --- */}
            {/* Kondisi dihapus, tombol selalu muncul */}
            <Button 
              asChild 
              onClick={toggleMenu}
              className="bg-primary hover:bg-[#D81B60] text-white rounded-md w-4/5 max-w-sm py-6 text-lg font-bold shadow-md"
            >
              <Link href="#tell-us-your-story">
                  #TellUsYourStory
              </Link>
            </Button>
        </div>
      )}
    </header>
  );
}
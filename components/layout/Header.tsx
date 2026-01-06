'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image"
import Button from '@/components/ui/Button';
import { NAVIGATION_LINKS } from '@/lib/constants';
import NavIconsBar from './NavIconsMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
<header className="sticky h-45 top-0 z-50 bg-[#0F2854]">
  <div className="hidden md:block bg-[#ed7332] h-15  text-white text-xl">
  <div className="container mx-auto px-6  max-w-container flex justify-between align-center py-2">
    <span className='flex  items-center'>
        <Image
          src={`/icons/delivery.svg`} 
          alt={"icon"}
          width={28}
          height={28}
          className="mb-1  opacity-90"
                    /> 
      Livraison gratuite dès 500€
      </span>
    <span className='flex  items-center'>
        <Image
          src={`/icons/exchange.svg`} 
          alt={"icon"}
          width={28}
          height={28}
          className="mb-1 opacity-90"
                    /> 
       Retour gratuit sous 30 jours
    </span>
    <span className='flex items-center justify-between'>
       <Image
          src={`/icons/cash.svg`} 
          alt={"icon"}
          width={28}
          height={28}
          className="mb-1 opacity-90"
                    /> 
       Paiement sécurisé
       </span>
  </div>
</div>

  <nav className="container mx-auto px-6 pt-6 max-w-container">
    <div className="flex items-center justify-between h-20">

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Rizuk Logo"
          width={200}
          height={150}
          priority
          className=" h-50 w-auto"
        />
      </Link>

      {/* Navigation desktop */}
      <NavIconsBar />

      {/* CTA */}
      <div className="hidden md:block">
        <Button href="/contact" className="px-8 py-4 bg-white/50 backdrop-blur-sm">
          Nous contacter
        </Button>
      </div>

      {/* Mobile burger */}
       {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 ">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-white hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button href="/contact" variant="primary" className=" w-full px-8 py-4 bg-white/50 backdrop-blur-sm">
                Nous contacter
              </Button>
            </div>
          </div>
        )}
    </div>
  </nav>
</header>

  );
}
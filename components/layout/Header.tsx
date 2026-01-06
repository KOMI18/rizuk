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
    
<header className="sticky md:h-45 top-0 z-50 bg-[#0F2854]">
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
          className=" h-30 md:h-50 w-auto"
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
      <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu" > <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" > { mobileMenuOpen ? ( <path d="M6 18L18 6M6 6l12 12" /> ) : ( <path d="M4 6h16M4 12h16M4 18h16" /> )} </svg> </button>
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0F2854] bg-opacity-95 z-50 overflow-y-auto transition-all">
          <div className="flex flex-col container mx-auto px-6 py-6 gap-4">

            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white"
                aria-label="Fermer le menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-3">
              {NAVIGATION_LINKS.map((link) => {
                const isProducts = link.label === "Produits"
                return (
                  <div key={link.href} className="flex flex-col">
                    <Link
                      href={link.href}
                      className="py-3 text-white text-lg font-medium hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>

                    {/* Dropdown mobile pour Produits */}
                    {isProducts && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        <Link
                          href="/produits/chauffe-biberon"
                          className="py-2 text-white text-base hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Chauffe-biberon
                        </Link>
                        <Link
                          href="/produits/robot-culinaire"
                          className="py-2 text-white text-base hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Robot culinaire
                        </Link>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* CTA Contact */}
            <div className="mt-6">
              <Button
                href="/contact"
                variant="primary"
                className="w-full px-8 py-4 bg-white/50 backdrop-blur-sm text-[#0F2854] font-semibold hover:bg-white/70 transition"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  </nav>
</header>

  );
}
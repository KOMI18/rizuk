'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image"
import Button from '@/components/ui/Button';
import { NAVIGATION_LINKS } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-6 max-w-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
        <Link href="/" className="flex items-center">
            <Image 
                src="/logo.jpeg" // Remplacez par le nom exact de votre fichier dans /public
                alt="Rizuk Logo"
                width={200}           // Largeur souhaitée (en pixels)
                height={150}          // Hauteur souhaitée (en pixels)
                priority             // Indispensable pour le logo car c'est un élément LCP (chargement prioritaire)
                className="h-40 p-2 w-auto" // Permet de gérer la taille avec Tailwind
            />
            </Link>


          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA desktop */}
          <div className="hidden md:block">
            <Button href="/contact" variant="primary">
              Nous contacter
            </Button>
          </div>

          {/* Menu hamburger mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4">
              <Button href="/contact" variant="primary" className="w-full">
                Nous contacter
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
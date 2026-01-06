'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image"
import Button from '@/components/ui/Button';
import { NAVIGATION_LINKS } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F2854]   ">
      <nav className="container mx-auto px-6 max-w-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
        <Link href="/" className="flex items-center">
            <Image 
                src="/logo.png" // Remplacez par le nom exact de votre fichier dans /public
                alt="Rizuk Logo"
                width={200}           // Largeur souhaitée (en pixels)
                height={150}          // Hauteur souhaitée (en pixels)
                priority             // Indispensable pour le logo car c'est un élément LCP (chargement prioritaire)
                className="h-40 pt-2 mt-1 w-auto" // Permet de gérer la taille avec Tailwind
            />
            </Link>


          {/* Navigation desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map((link) =>
            link.label === "Produit" ? (
              <div key={link.href} className="relative group">
                {/* Lien Produits */}
                <Link
                  href={link.href}
                  className="text-white text-xl hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>

                {/* Sous-menu */}
                <div
                  className="
                    absolute left-1/2 top-full mt-5 w-[520px] -translate-x-1/2
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-300
                  "
                >
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 grid grid-cols-2 gap-6">

                    {/* Chauffe-biberon */}
                    <Link
                      href="/produits/chauffe-biberon"
                      className="p-4 rounded-2xl hover:bg-gray-50 transition"
                    >
                      <h3 className="text-lg font-bold text-gray-900">
                        Chauffe-biberon
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        Chauffe rapide et homogène pour préserver les nutriments du lait.
                      </p>
                    </Link>

                    {/* Robot culinaire */}
                    <Link
                      href="/produits/robot-culinaire"
                      className="p-4 rounded-2xl hover:bg-gray-50 transition"
                    >
                      <h3 className="text-lg font-bold text-gray-900">
                        Robot culinaire
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        Préparez facilement des repas sains et équilibrés pour bébé.
                      </p>
                    </Link>

                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-xl hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </div>


          {/* CTA desktop */}
          <div className="hidden md:block">
            <Button href="/contact" className='px-8 py-4 bg-white/50 backdrop-blur-sm'>
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
              className="w-6 h-6 text-white"
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
      </nav>
    </header>
  );
}
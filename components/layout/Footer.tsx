
import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG, NAVIGATION_LINKS } from '@/lib/constants';
import Image from 'next/image';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Colonne 1 : Logo + Baseline */}
          <div>
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
            <p className="text-gray-600 text-sm">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Légal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Légal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales#confidentialite"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
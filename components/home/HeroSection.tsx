"use client"; // Obligatoire pour les animations
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  // Variantes d'animation pour les éléments de texte
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center bg-[#F4F4F4] overflow-hidden pt-24 md:pt-0">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* 1. TEXTE ET BOUTONS (À GAUCHE) */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
           

            <motion.h1 
              {...fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
            >
              L’innovation au service <br />
              <span className="text-primary">de la vie</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg"
            >
              Offrez à votre enfant le meilleur de la nature. Notre technologie vapeur
              préserve chaque vitamine pour des repas sains.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button href="/produits" variant="primary" className="px-10 py-4 text-lg rounded-full shadow-lg hover:scale-105 transition-transform">
                Découvrir l'appareil
              </Button>
              <Button href="/recettes" variant='secondary' className="px-10 py-4 text-lg bg-transparent border-2 border-gray-300 text-gray-800 rounded-full hover:bg-gray-100 transition-all">
                Nos idées recettes
              </Button>
            </motion.div>
          </div>

          {/* 2. IMAGE (À DROITE) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 relative h-[400px] md:h-[600px]"
          >
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/hero-1.jpg"
                alt="Bébé Rizuk"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. SÉPARATION STYLISÉE (SVG Wave Philips-style) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,34.72V0Z" opacity=".1" fill="#000"></path>
          <path d="M0,120V0H1200V120H0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}
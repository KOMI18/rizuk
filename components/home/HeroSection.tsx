import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* 1. L'image de fond (Background Image) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-1.jpg" // Placez une belle image HD dans /public/images/
          alt="Maman et bébé utilisant le Baby Food Maker Rizuk"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay pour assurer la lisibilité du texte (dégradé léger) */}
        <div className="absolute inset-0" />
      </div>

      {/* 2. Le Contenu (Text Content) */}
      <div className="flex justify-center text-center relative z-10 mx-auto px-6">
        <div className="max-w-xl">
          
          <p className="text-5xl text-primary  md:text-7xl lg:text-[80px] font-bold text-white leading-tight mb-6">
            Le goût du fait-maison
          </p>
          <p className="text-lg md:text-2xl text-white  mb-8 leading-relaxed">
     
           Offrez à votre enfant le meilleur de la nature. Notre technologie vapeur
           préserve chaque vitamine pour des repas sains, prêts en un clin d'œil.
          </p>
          <div className="flex md:ml-20 flex-col sm:flex-row gap-4">
            <Button href="/produit" variant="primary" className="px-8 py-4">
              Découvrir l'appareil
            </Button>
            <Button href="/recettes"  className="px-8 py-4 bg-white/50 backdrop-blur-sm">
             Nos idées recettes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

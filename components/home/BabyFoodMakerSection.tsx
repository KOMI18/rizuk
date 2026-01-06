'use client';
import React, { useCallback } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import { ChevronLeft, ChevronRight , HandMetal } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const carouselImages = [
  { src: '/carousel-1.jpg', alt: 'Chauffe Biberon' },
  { src: '/carousel-2.jpeg', alt: 'Robot Culinaire Pour Bebe' },
  // { src: '/carousel-4.png', alt: 'Baby Food Maker gros plan' },
];

export default function BabyFoodMakerSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative w-full">
      {/* --- PARTIE HAUTE --- */}
      {/* On augmente la hauteur sur mobile (h-[600px]) pour laisser de la place au texte */}
      <div className="relative w-full h-[600px] md:h-[650px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mama_whit_bby.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> 
        </div>

        {/* Ajustement des marges du texte pour mobile */}
        <div className="relative z-10 max-w-3xl pt-10 md:pt-0">
          <Heading level={1} className="text-white text-3xl md:text-5xl mb-4 px-2">
            L'alimentation infantile réinventée
          </Heading>
          <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed px-4">
            RIZUK conçoit des solutions innovantes pour accompagner les parents dans la nutrition de leurs bébés.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button href="/produit" variant="primary" className="w-full sm:w-auto">
              Découvrir le Baby Food Maker
            </Button>
            
          </div>
        </div>
      </div>

      {/* --- PARTIE BASSE (CARROUSEL) --- */}
      {/* -mt-20 sur mobile au lieu de -mt-40 pour ne pas écraser le texte */}
     
      
      {/* Espace flexible en bas */}
      <div className="h-16 md:h-32" />
    </section>
  );
}

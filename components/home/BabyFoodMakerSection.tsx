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
      <div className="relative z-20 -mt-20 md:-mt-32 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-2xl p-2 md:p-4 border border-gray-100 relative">
            
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
              <div className="flex">
                {carouselImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="flex-[0_0_100%] min-w-0 relative  group cursor-pointer"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}

                      className=" h-full w-full"
                    />

                    {/* 1. INDICATEUR MOBILE (Visible uniquement sur mobile, disparaît au toucher) */}
                    {/* <div className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none group-active:opacity-0 transition-opacity">
                        <div className="bg-black/50 backdrop-blur-sm p-4 rounded-full animate-bounce">
                           <HandMetal className="text-white w-6 h-6" />
                           <p className="text-white text-[10px] mt-1 font-bold">Détails</p>
                        </div>
                    </div> */}

                    {/* 2. OVERLAY (Hover sur Desktop, Active/Touch sur Mobile) */}
                    {/* group-hover:opacity-100 (Desktop) | group-active:opacity-100 (Mobile) */}
                    <div className="hidden md:flex  absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-white text-xl md:text-3xl font-bold mb-4">
                        {image.alt}
                      </h3>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button href="/produits" variant="primary">
                          Découvrir
                        </Button>
                        <Button href="/contact" className="text-black px-6 py-2  font-medium">
                          Obtenir
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons de navigation (Placés en dehors de l'overlay pour rester cliquables) */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 md:left-8 bottom-4 md:bottom-8 z-30 p-2 md:p-3 bg-[#ee7316] text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute right-4 md:right-8 bottom-4 md:bottom-8 z-30 p-2 md:p-3 bg-[#ee7316] text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Espace flexible en bas */}
      <div className="h-16 md:h-32" />
    </section>
  );
}

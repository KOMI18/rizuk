import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';

export default function AboutTeaser() {
  return (
    <section className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* BLOC IMAGES : Composition de deux images qui se chevauchent */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            {/* Image principale (L'émotion) */}
            <div className="relative w-full aspect-[4/5] md:w-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
              <Image 
                src="/about-1.jpg" // Image d'un parent souriant avec son bébé
                alt="Notre mission chez Rizuk"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Image secondaire (Le détail/produit) - Décalée pour donner du relief */}
            <div className="absolute -bottom-10 -right-4 md:right-10 w-[200px] md:w-[250px] aspect-square rounded-[2rem] border-8 border-[#F8F9FA] overflow-hidden shadow-xl z-20 hidden sm:block transform hover:rotate-2 transition-transform duration-500">
              <Image 
                src="/about-2.jpg" // Zoom sur une main préparant un repas frais
                alt="Qualité Rizuk"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* BLOC TEXTE : Copywriting Marketing */}
          <div className="w-full lg:w-1/2 text-left">
            <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              L'ADN de notre marque
            </span>
            
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Parce qu'avant d'être des ingénieurs, nous sommes des parents.
            </Heading>
            
            <div className="space-y-6 mb-10">
              <p className="text-lg text-gray-700 leading-relaxed">
                RIZUK est né d'un constat simple : la diversification alimentaire ne devrait pas être une source de stress, mais un moment de partage. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous avons réuni des experts en nutrition et des designers pour créer des outils intuitifs qui respectent les besoins nutritifs de vos enfants, tout en vous faisant gagner ce qu'il y a de plus précieux : du temps.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Button href="/a-propos" variant="secondary" className="px-8 py-4 rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all">
                Notre histoire
              </Button>
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-12 h-[1px] bg-gray-300"></div>
                {/* <span className="text-sm italic text-gray-400">Fondé en 2024</span> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

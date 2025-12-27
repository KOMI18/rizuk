import React from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';
import { PRODUCT } from '@/lib/constants';

export default function ProductHighlight() {
  return (
    <Section background="gray">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Visuel */}
        <div className="order-2 md:order-1">
         <div className="relative h-[500px] w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="none" // Ne charge pas la vidéo tant que la page n'est pas prête
                poster="public/bby_food_maker.jpeg" // Image affichée pendant le chargement
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/bby_food_maker.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
            </video>
            
           
          
            </div>
        </div>

        {/* Contenu */}
        <div className="order-1 md:order-2">
          <Heading level={2} className="mb-4">
            {PRODUCT.name}
          </Heading>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            L'appareil conçu pour préparer des repas sains et équilibrés pour votre bébé, en toute simplicité.
          </p>

          {/* Bénéfices */}
          <div className="space-y-4 mb-8">
            {PRODUCT.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="ml-4 text-gray-700">{feature}</p>
              </div>
            ))}
          </div>

          <Button href="/produit" variant="primary">
            En savoir plus
          </Button>
        </div>
      </div>
    </Section>
  );
}
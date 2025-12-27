import React from 'react';
import Image from 'next/image';

const engagements = [
  {
    title: 'Sécurité Absolue',
    tag: 'Zéro Compromis',
    description: 'Conformité aux normes européennes les plus strictes pour une sérénité totale.',
    image: '/value-1.jpg', // Image : Main d'un parent tenant celle du bébé ou test de qualité
    size: 'md:col-span-2 md:row-span-1',
  },
  {
    title: 'Expertise Nutrition',
    tag: 'Science',
    description: 'Technologie développée main dans la main avec des pédiatres.',
    image: '/value-2.jpg', // Image : Légumes frais coupés avec une lumière douce
    size: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Design Épuré',
    tag: 'Simplicité',
    description: 'Pensé pour s’intégrer parfaitement dans votre quotidien.',
    image: '/value-3.jpg', // Image : Cuisine moderne et lumineuse avec le robot Rizuk
    size: 'md:col-span-1 md:row-span-2',
  },
  {
    title: 'Matériaux Sains',
    tag: '100% Sans BPA',
    description: 'Des composants garantis sans danger, pour le bien-être durable de bébé.',
    image: '/value-4.jpg', // Image : Zoom sur la texture du plastique noble ou eau pure
    size: 'md:col-span-2 md:row-span-1',
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
            Pourquoi choisir Rizuk
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Chaque détail a été pensé <br className="hidden md:block" /> pour protéger ce que vous avez de plus cher.
          </h2>
        </div>

        {/* Grille Bento Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {engagements.map((item, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-[2rem] bg-white shadow-sm ${item.size}`}
            >
              {/* Image de fond avec zoom au survol */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dégradé pour la lisibilité du texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Texte marketing positionné en bas */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-primary-light font-medium text-sm mb-2 block opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  {item.tag}
                </span>
                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-[280px] opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

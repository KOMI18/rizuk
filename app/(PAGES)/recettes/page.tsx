import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Baby, ChevronRight } from 'lucide-react';
import Heading from '@/components/ui/Heading';

const RECIPES = [
  {
    id: 1,
    title: "Velouté de carottes à la fleur d'oranger",
    age: "6+ mois",
    duration: "15 min",
    category: "Légumes",
    image: "/velouter-carotte.jpeg", // Image lumineuse, vue de haut
    slug: "veloute-carottes"
  },
  // {
  //   id: 2,
  //   title: "Duo de courgettes et cabillaud vapeur",
  //   age: "8+ mois",
  //   duration: "20 min",
  //   category: "Poisson",
  //   image: "/images/recipe-fish.jpg",
  //   slug: "courgettes-cabillaud"
  // },
  // {
  //   id: 3,
  //   title: "Compotée de pommes Gala au bâton de cannelle",
  //   age: "4+ mois",
  //   duration: "10 min",
  //   category: "Fruits",
  //   image: "/images/recipe-apple.jpg",
  //   slug: "compote-pomme"
  // },
  // Ajoutez d'autres recettes ici
];

export default function RecipesPage() {
  return (
    <main className="bg-[#FCFBFA] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Cuisine Maison & Nutrition
          </span>
          <Heading level={1} className="text-5xl md:text-7xl font-bold mb-6">
            Le goût de la <br /> <span className="text-primary italic">découverte.</span>
          </Heading>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explorez nos recettes conçues avec des nutritionnistes pour éveiller les papilles de votre bébé tout en préservant l'essentiel.
          </p>
        </div>

        {/* FILTRES PAR ÂGE (Style Boutons Pill) */}
        <div className="flex gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {['Tous', '4+ mois', '6+ mois', '8+ mois', '12+ mois'].map((filter) => (
            <button 
              key={filter}
              className="px-8 py-3 rounded-full bg-white border border-gray-100 text-gray-600 font-medium whitespace-nowrap hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* GRILLE DE RECETTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {RECIPES.map((recipe) => (
            <Link 
              href={`/recettes/${recipe.slug}`} 
              key={recipe.id}
              className="group block"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image 
                  src={recipe.image} 
                  alt={recipe.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge Catégorie */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider">
                  {recipe.category}
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Baby size={16} className="text-primary" /> {recipe.age}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock size={16} /> {recipe.duration}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors flex items-center justify-between">
                  {recipe.title}
                  <ChevronRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

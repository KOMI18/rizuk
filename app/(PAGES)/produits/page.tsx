import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'chauffe-biberon',
    title: 'Chauffe-Biberon Ultra-Rapide',
    description: 'La température idéale en moins de 2 minutes, sans point chaud pour la sécurité de bébé.',
    image: '/carousel-1 1.png', // Image sur fond blanc ou détourée
    color: 'bg-gray-50',
    link: '/produits/chauffe-biberon'
  },
  {
    id: 'robot-culinaire',
    title: 'Robot Culinaire 4-en-1',
    description: 'Cuisinez à la vapeur, mixez, décongelez et réchauffez. Le compagnon de la diversification.',
    image: '/carousel-2.png',
    color: 'bg-gray-50',
    link: '/produits/robot-culinaire'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6">
        {/* En-tête de section */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos essentiels pour bébé
          </h2>
          <p className="text-gray-600 text-lg">
            Des technologies pensées par des parents, pour des parents. La simplicité au service de la nutrition.
          </p>
        </div>

        {/* Grille des deux produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className={`relative overflow-hidden  ${product.color} transition-all duration-300  group`}
            >
              <div className="p-8 md:p-12 flex flex-col h-full">
                {/* Texte */}
                <div className="mb-8 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 max-w-sm">
                    {product.description}
                  </p>
                  <Link 
                    href={product.link}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    Voir les détails <ArrowRight size={20} />
                  </Link>
                </div>

                {/* Image Produit */}
                <div className="relative mt-auto pt-10 flex justify-center  transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="object-contain max-h-[300px] w-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

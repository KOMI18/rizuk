import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Zap, ShieldCheck, Thermometer } from 'lucide-react';
import Button from '@/components/ui/Button';

// Simulation de base de données produits
const PRODUCTS_DATA: any = {
  'chauffe-biberon': {
    title: 'Chauffe-Biberon Ultra-Rapide',
    tagline: 'La précision au service de chaque biberon.',
    price: '49,99 €',
    image: '/carousel-1.jpg',
    description: 'Conçu pour préserver les nutriments du lait maternel grâce à une chauffe douce et uniforme.',
    features: [
      { icon: Zap, text: 'Chauffe en 2 minutes' },
      { icon: Thermometer, text: 'Contrôle intelligent de température' },
      { icon: ShieldCheck, text: 'Arrêt automatique de sécurité' },
      { icon: CheckCircle2, text: 'Sans BPA' },
    ],
    details: [
      { label: 'Dimensions', value: '16 x 14 x 15 cm' },
      { label: 'Compatibilité', value: 'Toutes marques de biberons' },
      { label: 'Garantie', value: '2 ans' },
    ]
  },
  'robot-culinaire': {
    title: 'Robot Culinaire 4-en-1',
    tagline: 'La révolution de la diversification alimentaire.',
    price: '129,99 €',
    image: '/carousel-2.png',
    description: 'Cuisinez à la vapeur, mixez, décongelez et réchauffez vos repas sains en un seul geste.',
    features: [
      { icon: Zap, text: 'Cuisson vapeur ultra-rapide' },
      { icon: Thermometer, text: 'Texture réglable (lisse ou morceaux)' },
      { icon: ShieldCheck, text: 'Bol grande capacité 1100ml' },
      { icon: CheckCircle2, text: 'Lames haute performance' },
    ],
    details: [
      { label: 'Puissance', value: '400W' },
      { label: 'Matériaux', value: 'Plastique haute résistance sans BPA' },
      { label: 'Accessoires', value: 'Spatule et livret de recettes inclus' },
    ]
  }
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
        const { slug } = await params;
        const product = PRODUCTS_DATA[slug];
        console.log("Slug reçu :", slug);
  
   if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Produit non trouvé</h1>
        <p className="text-gray-500">Le slug "{slug}" ne correspond à rien dans nos données.</p>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* SECTION 1 : HERO PRODUIT */}
      <section className="pt-32 pb-20 bg-[#F9F9F9]">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visuel Produit */}
          <div className="relative aspect-square bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 p-12">
            <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              className="object-contain p-8"
              priority
            />
          </div>

          {/* Infos Achat */}
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Produit Phare</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {product.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-10">{product.price}</div>
            
           <div className="flex flex-col gap-4">
            <Button 
                href={`/contact?produit=${slug}`} 
                variant="primary" 
                className="px-12 py-5 rounded-full text-lg shadow-lg hover:shadow-orange-200 transition-all"
            >
                Obtenir mon appareil
            </Button>
            <p className="text-sm text-gray-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Un conseiller vous répondra sous 24h
            </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 : CARACTÉRISTIQUES CLÉS (Icônes) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {product.features.map((feature: any, i: number) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <p className="font-semibold text-gray-900">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 : DÉTAILS TECHNIQUES (Tableau) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Spécifications techniques</h2>
          <div className="border-t border-gray-200">
            {product.details.map((detail: any, i: number) => (
              <div key={i} className="flex justify-between py-6 border-b border-gray-200">
                <span className="font-semibold text-gray-500">{detail.label}</span>
                <span className="text-gray-900 text-right">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 : IMAGE LIFESTYLE IMMERSIVE */}
      <section className="relative h-[600px] w-full">
        <Image 
          src={`/images/${slug}-lifestyle.jpg`} 
          alt="Utilisation en situation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold max-w-5xl px-6">
            Conçu pour s'intégrer dans votre vie de parent.
          </h2>
        </div>
      </section>
    </main>
  );
}

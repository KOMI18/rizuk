import React from 'react';
import Image from 'next/image';
import { Clock, Baby, ChefHat, Timer, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';

// Données des recettes (à déplacer dans un fichier lib/recipes.ts plus tard)
const RECIPES_DATA: any = {
  'veloute-carottes': {
    title: "Velouté de carottes à la fleur d'oranger",
    age: "6+ mois",
    prepTime: "5 min",
    cookTime: "15 min",
    difficulty: "Très facile",
    image: "/velouter-carotte.jfif",
    description: "Une introduction douce aux saveurs florales, parfaite pour éveiller les sens de bébé tout en douceur.",
    ingredients: [
      "2 grosses carottes bio",
      "1 petite pomme de terre",
      "1 cuillère à café d'eau de fleur d'oranger",
      "1 noisette de beurre (optionnel)"
    ],
    steps: [
      "Épluchez et coupez les carottes et la pomme de terre en petits dés de 1cm.",
      "Remplissez le réservoir d'eau du Robot Rizuk au niveau 3.",
      "Placez les légumes dans le panier vapeur et lancez le cycle de cuisson (15 min).",
      "Une fois cuits, transvasez les légumes dans le bol de mixage avec le jus de cuisson.",
      "Ajoutez la fleur d'oranger et mixez par petites impulsions jusqu'à obtenir un velouté lisse."
    ]
  }
};

export default async function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = RECIPES_DATA[slug];

  if (!recipe) return <div className="py-20 text-center">Recette non trouvée</div>;

  return (
    <main className="bg-white min-h-screen pt-28">
      {/* HERO RECETTE */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
          <Image src={recipe.image} alt={recipe.title} fill className="object-cover" />
        </div>
        
        <div>
          <span className="bg-orange-100 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            Recette Spéciale Robot Rizuk
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {recipe.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed italic">
            "{recipe.description}"
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-100">
            <div className="flex flex-col items-center"><Baby className="text-primary mb-2" /><span className="text-sm font-bold">{recipe.age}</span></div>
            <div className="flex flex-col items-center"><Timer className="text-gray-400 mb-2" /><span className="text-sm font-bold">{recipe.prepTime}</span></div>
            <div className="flex flex-col items-center"><Clock className="text-gray-400 mb-2" /><span className="text-sm font-bold">{recipe.cookTime}</span></div>
            <div className="flex flex-col items-center"><ChefHat className="text-gray-400 mb-2" /><span className="text-sm font-bold">{recipe.difficulty}</span></div>
          </div>
        </div>
      </section>

      {/* CONTENU : INGRÉDIENTS & ÉTAPES */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Ingrédients */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm h-fit">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              Ingrédients
            </h2>
            <ul className="space-y-4">
              {recipe.ingredients.map((ing: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Étapes avec focus Robot */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-10">Préparation avec votre Robot</h2>
            <div className="space-y-12">
              {recipe.steps.map((step: string, i: number) => (
                <div key={i} className="flex gap-6 group">
                  <span className="flex-none w-10 h-10 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed pt-1">
                    {step.includes("Robot Rizuk") ? (
                      <span className="font-semibold text-gray-900 underline decoration-primary/30 underline-offset-4">
                        {step}
                      </span>
                    ) : step}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA PRODUIT */}
            <div className="mt-16 bg-primary rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Vous n'avez pas encore le robot ?</h3>
                <p className="text-white/80">Réalisez cette recette en un clin d'œil avec le Robot Culinaire Rizuk.</p>
              </div>
              <Button href="/produits/robot-culinaire" variant='primary' className=" text-black px-8 py-4 rounded-full font-bold ">
                Découvrir le robot
              </Button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

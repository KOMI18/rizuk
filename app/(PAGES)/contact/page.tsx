'use client';
import { useSearchParams } from 'next/navigation';
import Heading from '@/components/ui/Heading';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const produitSelectionne = searchParams.get('produit');

  return (
    <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-16 border border-gray-100">
          <Heading level={1} className="mb-4">Finalisons votre projet</Heading>
          <p className="text-gray-600 mb-12">
            Laissez-nous vos coordonnées. Un expert Rizuk vous contactera pour valider les modalités de paiement et de livraison.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 ml-2">Votre Nom</label>
              <input type="text" placeholder="Ex: Marie Dupont" className="p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700 ml-2">Votre Email</label>
              <input type="email" placeholder="Ex: marie.dupont@email.com" className="p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="font-semibold text-gray-700 ml-2">Produit souhaité</label>
              <select 
                defaultValue={produitSelectionne || ""}
                className="p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none appearance-none"
              >
                <option value="robot-culinaire">Robot Culinaire 4-en-1</option>
                <option value="chauffe-biberon">Chauffe-Biberon Ultra-Rapide</option>
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="font-semibold text-gray-700 ml-2">Message (Optionnel)</label>
              <textarea rows={4} placeholder="Posez-nous vos questions..." className="p-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary outline-none" />
            </div>

            <button className="md:col-span-2 bg-primary text-white font-bold py-5 rounded-2xl hover:bg-primary-dark transition-all shadow-lg text-lg">
              Envoyer ma demande de réservation
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

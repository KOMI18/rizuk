import React from "react";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <section className="bg-[#0F2854] text-white py-16 px-6 md:px-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Mentions légales
        </h1>
        <p className="max-w-3xl text-lg text-white opacity-90">
          Informations légales relatives à l’éditeur et à l’hébergement du site Rizuk.
        </p>
      </section>

      {/* Content */}
      <section className="  py-16 px-6 md:px-20 max-w-5xl mx-auto space-y-12">
        
        {/* Éditeur */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Éditeur du site</h2>
          <ul className="space-y-2 leading-relaxed">
            <li><strong>Nom :</strong> Rizuk</li>
            <li><strong>Forme juridique :</strong> Société par Actions Simplifiée Unipersonnelle (SASU)</li>
            <li><strong>Capital social :</strong> 1 000 euros</li>
            <li><strong>Siège social :</strong> 25 Rue de Ponthieu, 75008 Paris, France</li>
            <li><strong>Numéro d’immatriculation :</strong> 990 794 240 R.C.S. Paris</li>
            <li><strong>Numéro de TVA intracommunautaire :</strong> FR92 990794240</li>
            <li>
              <strong>Adresse électronique :</strong>{" "}
              <a
                href="mailto:contact@rizuk.com"
                className="text-[#ed7332] hover:underline"
              >
                contact@rizuk.com
              </a>
            </li>
            <li>
              <strong>Directeur de la publication :</strong> Jean-Richard NKOUNGA, Président de Rizuk France
            </li>
          </ul>
        </div>

        {/* Hébergement */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
          <ul className="space-y-2 leading-relaxed">
            <li><strong>Hébergeur :</strong> LWS</li>
            <li><strong>Siège social :</strong> 2 rue Jules Ferry, 88190 Golbey, France</li>
            <li>
              <strong>Site internet :</strong>{" "}
              <a
                href="https://www.lws.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ed7332] hover:underline"
              >
                www.lws.fr
              </a>
            </li>
          </ul>
        </div>

        {/* Propriété intellectuelle */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
          <p className="leading-relaxed">
            L’ensemble des contenus présents sur le site <strong>Rizuk</strong>
            (textes, images, graphismes, logos, vidéos, icônes, sons, logiciels,
            structure du site, etc.) est protégé par les dispositions du Code de
            la propriété intellectuelle et demeure la propriété exclusive de
            Rizuk ou de ses partenaires, sauf mention contraire.
          </p>
          <p className="mt-4 leading-relaxed">
            Toute reproduction, représentation, modification, publication,
            adaptation ou exploitation, totale ou partielle, de ces contenus,
            par quelque procédé que ce soit, sans l’autorisation écrite préalable
            de Rizuk, est strictement interdite.
          </p>
        </div>

      </section>
    </div>
  );
}

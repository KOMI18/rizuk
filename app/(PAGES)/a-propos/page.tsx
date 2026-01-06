import React from "react";
export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Section Hero */}
      {/* bg-gradient-to-r from-[#0F2854] to-[#ed7332] */}
      <section className="bg-[#0F2854] text-white py-20 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">À Propos</h1>
        <p className="text-lg text-white md:text-xl max-w-3xl">
          Chez <span className="font-semibold">RIZUK</span>, nous concevons des technologies innovantes pour simplifier la vie quotidienne.
        </p>
      </section>

      {/* Section Description */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
        <div className="md:w-1/2 space-y-6">
          <p className="text-xl">
            Devenir parent transforme en effet profondément le quotidien. Les journées s’intensifient, les nuits se raccourcissent et la charge mentale s'alourdit. C'est dans ce contexte que RIZUK est né : pour accompagner les familles avec des appareils intelligents conçus pour alléger les contraintes du quotidien et redonner du temps à l'essentiel.
          </p>
          <p className="text-xl">
            Notre ambition est claire : mettre la technologie au service de l'humain. D'ici 2030, nous souhaitons avoir un impact positif sur la vie de plus de 1,5 milliard de personnes par an, dont 200 millions issues de communautés défavorisées, en développant des solutions utiles, accessibles et réellement adaptées aux besoins du quotidien.
          </p>
          <p className="text-xl">
            Nous considérons les technologies de pointe comme un levier majeur pour améliorer le bien-être, la sérénité et l’organisation familiale. Notre mission est de fournir à tous, et plus particulièrement aux nouveaux parents, des outils fiables, intuitifs et efficaces pour réduire la charge mentale et optimiser les gestes du quotidien.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={"/illustration/about-1.svg"}
            alt="Illustration innovation"
            className="w-full rounded-xl"
          />
        </div>
      </section>

      {/* Section Mission */}
      <section className="bg-gray-50 py-16 px-6 md:px-20 flex flex-col-reverse md:flex-row gap-12 md:gap-20 ">
        <div className="md:w-1/2">
          <img
            src={"/illustration/about-2.svg"}
            alt="Illustration innovation"
            className="w-full "
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <p className="text-xl">
            En tant qu’entreprise technologique, nous innovons avec nos partenaires agréés autour d’une conviction forte : il existe toujours un moyen plus simple, plus humain et plus intelligent de faire les choses.
          </p>
          <p  className="text-xl font-semibold">
            Êtes-vous prêt à vous faciliter la vie grâce à des innovations pensées pour les parents d’aujourd’hui ? Faites-vous confiance.
          </p>
        </div>
      </section>
    </div>
  );
}

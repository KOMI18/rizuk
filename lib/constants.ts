import {  ProductDetails } from "@/type/ProductType";

export const COLORS = {
  primary: '#ee7316',
  primaryDark: '#d66412',
  white: '#ffffff',
  gray50: '#fafafa',
  gray100: '#f5f5f5',
  gray200: '#e5e5e5',
  gray600: '#525252',
  gray900: '#171717',
  textPrimary: '#171717',
  textSecondary: '#525252',
} as const;

export const SITE_CONFIG = {
  name: 'RIZUK',
  tagline: "L'alimentation infantile réinventée",
  email: 'contact@rizuk.com',
  phone: '+33 7 44 17 81 27',
} as const;

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/produits', label: 'Produits' },
  { href: '/a-propos', label: 'A propos' },
  // { href: '/partenariats', label: 'Partenariats' },
  { href: '/contact', label: 'Contact' },
  { href: '/recettes', label: 'Recettes' },

] as const;

export const PRODUCT = {
  name: 'Food Baby Maker',
  tagline: 'Préparez des repas sains pour votre bébé, en toute simplicité',
  features: [
    'Préparation en 15 minutes',
    'Conserve les nutriments essentiels',
    'Nettoyage facile',
  ],
} as const;


export const productDetails: Record<string, ProductDetails> = {
  "chauffe-biberon": {
    title: "Chauffe-biberon RIZUK",
    features: [
      "Chauffage ultra-rapide en 2 minutes : le chauffe-biberon RIZUK est équipé d’une puissance élevée de 380 W, permettant de chauffer le lait rapidement et de manière homogène. Une fois le temps de chauffage réglé, l’écran tactile LCD affiche la température en direct et le compte à rebours pour une utilisation pratique et sûre. Ce stérilisateur intelligent dispose d’une mémoire automatique qui sauvegarde vos derniers réglages pour gagner du temps à chaque utilisation.",

      "TÉTÉE NOCTURNE OU NOCTURNE 10 FOIS PLUS FACILE : Les nouveau-nés se réveillent souvent pour téter la nuit. Le chauffe-bouteille RIZUK possède une fonction de maintien à température constante 24 heures, qui chauffe uniformément l’eau en bouteille à la température idéale et la maintient prête en permanence. Ainsi, le bébé peut boire dès qu’il a faim, et les parents peuvent préparer le lait instantanément, même au milieu de la nuit — un véritable allié pour des nuits plus paisibles.",

      "MULTIFONCTION 10 EN 1 : Bien plus qu’un simple chauffe-biberon, le RIZUK combine chauffage rapide, conservation chaude 24 heures, chauffage des aliments, dégivrage, température réglable et panier anti-écauchure. Il offre également la fonction d’ébullition, un minuteur, une mémoire intelligente et une protection contre le fonctionnement à sec. Après l’alimentation, le biberon peut être stérilisé immédiatement à 100 °C, rendant l’alimentation du bébé encore plus simple, sûre et pratique.",

      "SIGNAL SONORE ET ARRÊT AUTOMATIQUE : Le chauffe-bouteille Rizuk émet 5 bips à la fin du cycle de chauffage — pas besoin de surveiller constamment, il suffit de retirer la bouteille dès que le signal retentit. En cas de manque d’eau, l’appareil s’éteint automatiquement, garantissant une sécurité optimale et une tranquillité d’esprit pour les parents occupés.",

      "COMPATIBLE AVEC TOUS TYPES DE BOUTEILLES : Conçu pour répondre aux besoins réels des parents, le chauffe-bouteilles RIZUK a été entièrement repensé avec un design moderne et un matériau Polyacrylique de qualité alimentaire. Il convient à toutes les tailles de bouteilles, qu’elles soient en verre ou en plastique, et convient à la plupart des grandes marques. Un cadeau idéal pour les nouvelles mamans et les jeunes familles."
    ]
  },

  "robot-culinaire": {
    title: "Robot culinaire bébé RIZUK",
    features: [
      "Préparez facilement des repas maison sains et équilibrés pour votre bébé grâce à ce robot de cuisine Rizuk tout-en-un de haute qualité, conçu pour cuire, mixer, réchauffer et décongeler dans un seul bol. Les préparations peuvent être servies immédiatement ou conservées pour une utilisation ultérieure.",

      "Après la cuisson à la vapeur, il suffit de soulever le bol, de le retourner et de le verrouiller afin d’obtenir la texture souhaitée, en toute simplicité.",

      "Accompagnez votre bébé dans la diversification alimentaire : le Robot Rizuk fait office de hachoir et de blender, permettant de mixer fruits, légumes, viande, poisson et textures plus épaisses selon son âge et ses besoins.",

      "Sa technologie de cuisson vapeur innovante assure une circulation homogène de la vapeur du bas vers le haut, garantissant une cuisson uniforme des aliments, sans les faire bouillir et en préservant leurs qualités nutritionnelles.",

      "Le bol et la lame sont compatibles avec le lave-vaisselle. Sa conception ouverte facilite le nettoyage et le remplissage du réservoir d’eau, pour une cuisson toujours propre et hygiénique. Capacité du bol : 1 L pour la cuisson vapeur et 720 mL pour le mixage.",

      "Trouvez l’inspiration grâce au livre de recettes en ligne, proposant des plats sains, simples à réaliser et adaptés aux différentes étapes du développement de votre bébé."
    ]
  }
};

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
  { href: '/partenariats', label: 'Partenariats' },
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
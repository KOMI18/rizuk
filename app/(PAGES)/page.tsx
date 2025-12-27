import HeroSection from '@/components/home/HeroSection';
import ProductHighlight from '@/components/home/ProductHighlight';
import ValuesSection from '@/components/home/ValuesSection';
import AboutTeaser from '@/components/home/AboutTeaser';
import CTASection from '@/components/home/CTASection';
import BabyFoodMakerSection from '@/components/home/BabyFoodMakerSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <ProductHighlight />
      <BabyFoodMakerSection/>
      <ValuesSection />
      <AboutTeaser />
      <CTASection />
    </>
  );
}
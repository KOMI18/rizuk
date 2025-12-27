import React from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Heading from '@/components/ui/Heading';

export default function CTASection() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <Heading level={2} centered className="mb-6">
          Prêt à simplifier les repas de votre bébé ?
        </Heading>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Contactez-nous pour en savoir plus ou pour commander le Food Baby Maker.
        </p>
        <Button href="/contact" variant="primary">
          Nous contacter
        </Button>
      </div>
    </Section>
  );
}
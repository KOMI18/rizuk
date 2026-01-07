import React from "react";
import { productDetails } from "@/lib/constants";

interface ProductDetailsProps {
  slug: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ slug }) => {
  const product = productDetails[slug];

  if (!product) return null;

  return (
    <section className="p-20 bg-[#F9F9F9]">
      <h2 className="text-2xl font-semibold mb-4">
        Description du produit
      </h2>

      <ul className="space-y-4 text-xl text-gray-700 leading-relaxed">
        {product.features.map((feature, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-[#ed7332] font-bold">•</span>
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductDetails;

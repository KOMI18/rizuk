// components/ProductGallery.tsx
"use client"

import { Product } from "@/type/ProductType"
import Image from "next/image"
import { useState } from "react"



type Props = {
  product: Product
}

export default function ProductGallery({ product }: Props) {
  const [activeImage, setActiveImage] = useState<string>(product.images[0])

  return (
    <div>
      {/* Image principale */}
      <div className="relative aspect-square bg-white rounded-[3rem] overflow-hidden shadow-sm  p-12">
        <Image
          src={activeImage}
          alt={product.title}
          fill
          className="object-contain p-8 transition-all rounded-[3rem]"
          priority
        />
      </div>

      {/* Miniatures */}
      <div className="mt-6 flex justify-center gap-4">
        {product.images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(img)}
            className={`relative w-20 h-20 rounded-xl border overflow-hidden transition
              ${
                activeImage === img
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-gray-200 hover:border-primary"
              }`}
          >
            <Image
              src={img}
              alt={`${product.title} vue ${index + 1}`}
              fill
              className="object-contain p-2 rounded-xl"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

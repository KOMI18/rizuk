import Link from "next/link"
import Image from "next/image"
import { NAVIGATION_LINKS } from "@/lib/constants"
import ProductsDropdown from "./ProductsDropdown"

export default function NavIconsBar() {
  return (
    <div className="hidden md:flex items-center space-x-20 relative">
      {NAVIGATION_LINKS.map((link) => {
        const isProduct = link.label === "Produits"

        return (
          <div key={link.href} className="relative group">
            <Link
              href={link.href}
              className="flex flex-col items-center text-white text-sm"
            >
              {/* Icône */}
              <Image
                src={`/icons/${link.label.toLowerCase()}.svg`}
                alt={link.label}
                width={28}
                height={28}
                className="mb-1 opacity-90"
              />

              {/* Texte */}
              <span className="text-xl">{link.label}</span>

              {/* Barre underline */}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-white transition-all group-hover:w-full"></span>
            </Link>

            {/* DROPDOWN PRODUITS */}
            {isProduct && <ProductsDropdown />}
          </div>
        )
      })}
    </div>
  )
}

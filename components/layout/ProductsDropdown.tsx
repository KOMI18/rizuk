import Image from "next/image"
import Link from "next/link"

export default function ProductsDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6
      w-[600px] h-40 bg-white rounded-xl shadow-xl opacity-0 invisible
      group-hover:opacity-100 group-hover:visible transition-all duration-200">

      <div className="grid grid-cols-2 gap-6 p-6">
        {/* Chauffe biberon */}
        <Link href="/produits/chauffe-biberon" className="group/item flex gap-4">
        
          <div>
            <h4 className="font-semibold text-[#0F2854]  text-2xl group-hover/item:underline">
              Chauffe-biberon
            </h4>
            <p className="text-xl text-gray-600">
              Chauffage rapide et sécurisé pour bébé
            </p>
          </div>
        </Link>

        {/* Robot culinaire */}
        <Link href="/produits/robot-culinaire" className="group/item flex gap-4">
        
          <div>
            <h4 className="font-semibold text-2xl text-[#0F2854] group-hover/item:underline">
              Robot culinaire
            </h4>
            <p className="text-xl text-gray-600">
              Préparez des repas sains en toute simplicité
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

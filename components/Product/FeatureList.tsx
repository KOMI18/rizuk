// components/FeatureList.tsx
"use client"

import { Feature } from "@/type/ProductType"
import {
  Zap,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react"

const ICONS = {
  zap: Zap,
  thermometer: Thermometer,
  shield: ShieldCheck,
  check: CheckCircle2,
} as const

type IconKey = keyof typeof ICONS


export default function ({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
      {features.map((feature, index) => {
        const Icon = ICONS[feature.icon  as IconKey]
        return (
         <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <p className="font-semibold text-gray-900">{feature.text}</p>
              </div>
        )
      })}
    </div>
  )
}

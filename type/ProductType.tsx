
export type Feature = {
  icon: "zap" | "thermometer" | "shield" | "check" // <-- string literals
  text: string
}

export type Details = {
    value:string
    label:string
    
}
export type Product = {
  title: string
  tagline: string
  price: string
  description: string
  features : Feature[]
  details:Details[]
  images: string[]
}

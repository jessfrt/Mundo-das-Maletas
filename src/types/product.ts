export type ProductCategory = 'Executiva' | 'Organização' | 'Viagem' | 'Vintage'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  description: string
  illustrativePrice: number
  features: readonly string[]
}

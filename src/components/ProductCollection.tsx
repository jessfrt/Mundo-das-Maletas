import type { Product } from '../types/product'
import { ProductCard } from './ProductCard'

interface ProductCollectionProps {
  products: readonly Product[]
}

export function ProductCollection({ products }: ProductCollectionProps) {
  return (
    <section className="section product-collection" id="destaques" aria-labelledby="collection-title">
      <div className="container">
        <div className="section-heading section-heading--split section-heading--light">
          <div>
            <p className="eyebrow"><span aria-hidden="true" /> Destaques da coleção</p>
            <h2 id="collection-title">Nove formas de seguir viagem.</h2>
          </div>
          <p>
            Explore o acervo completo. Nomes, descrições e valores existem apenas para compor este estudo de catálogo.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard product={product} index={index} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

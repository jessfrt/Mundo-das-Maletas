import type { Product } from '../types/product'

const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const titleId = `product-${product.id}`

  return (
    <article className="product-card" aria-labelledby={titleId}>
      <div className="product-card__media">
        <span className="product-card__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <img
          src={product.image}
          alt={product.imageAlt}
          width={product.imageWidth}
          height={product.imageHeight}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 id={titleId}>{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__price">
          <span>{priceFormatter.format(product.illustrativePrice)}</span>
          <small>valor ilustrativo</small>
        </div>
        <details className="product-card__details">
          <summary>
            <span>Ver detalhes</span>
            <span className="product-card__details-icon" aria-hidden="true">+</span>
          </summary>
          <div className="product-card__details-content">
            <ul>
              {product.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <p>Item exibido somente para fins de demonstração visual.</p>
          </div>
        </details>
      </div>
    </article>
  )
}

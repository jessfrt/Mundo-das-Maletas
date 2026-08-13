import type { Product } from '../types/product'

interface HeroProps {
  primaryProduct: Product
  secondaryProduct: Product
}

export function Hero({ primaryProduct, secondaryProduct }: HeroProps) {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero__layout">
        <div className="hero__content">
          <p className="eyebrow"><span aria-hidden="true" /> Curadoria para diferentes jornadas</p>
          <h1 id="hero-title">Leve seu estilo.<br />Organize o caminho.</h1>
          <p className="hero__lead">
            Uma seleção editorial de formas, cores e propostas para imaginar viagens,
            rotinas e histórias — em um catálogo inteiramente demonstrativo.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#destaques">
              Explorar coleção <span aria-hidden="true">↘</span>
            </a>
            <a className="button button--secondary" href="#guia">Como escolher</a>
          </div>
          <p className="hero__note">
            <span aria-hidden="true">✦</span> Nove referências visuais, nenhuma oferta comercial.
          </p>
        </div>

        <div className="hero-art" aria-hidden="true">
          <span className="hero-art__index">Edição de viagem <strong>01</strong></span>
          <span className="hero-art__orbit hero-art__orbit--one" />
          <span className="hero-art__orbit hero-art__orbit--two" />
          <div className="hero-art__frame hero-art__frame--primary">
            <img
              src={primaryProduct.image}
              alt=""
              width={primaryProduct.imageWidth}
              height={primaryProduct.imageHeight}
              fetchPriority="high"
            />
          </div>
          <div className="hero-art__frame hero-art__frame--secondary">
            <img
              src={secondaryProduct.image}
              alt=""
              width={secondaryProduct.imageWidth}
              height={secondaryProduct.imageHeight}
            />
          </div>
          <span className="hero-art__caption">Entre o clássico<br />e o contemporâneo.</span>
        </div>
      </div>
    </section>
  )
}

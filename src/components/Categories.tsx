const categories = [
  {
    number: '01',
    title: 'Viagem',
    description: 'Volumes e composições para imaginar trajetos curtos ou grandes jornadas.',
    tone: 'terracotta',
  },
  {
    number: '02',
    title: 'Executiva',
    description: 'Formas estruturadas e visuais sóbrios para acompanhar a rotina.',
    tone: 'green',
  },
  {
    number: '03',
    title: 'Organização',
    description: 'Referências para planejar espaços e distribuir o que importa.',
    tone: 'gold',
  },
  {
    number: '04',
    title: 'Vintage',
    description: 'Peças de caráter cenográfico que evocam memórias de outras épocas.',
    tone: 'ink',
  },
] as const

export function Categories() {
  return (
    <section className="section categories" id="colecoes" aria-labelledby="categories-title">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow"><span aria-hidden="true" /> Coleções</p>
            <h2 id="categories-title">Uma maleta para cada narrativa.</h2>
          </div>
          <p>
            Quatro olhares organizam este acervo visual. Escolha um ponto de partida e conheça a seleção completa.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((category) => (
            <a
              className={`category-card category-card--${category.tone}`}
              href="#destaques"
              key={category.title}
              aria-label={`Ir à coleção; categoria ${category.title}`}
            >
              <span className="category-card__number">{category.number}</span>
              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              <span className="category-card__arrow" aria-hidden="true">↘</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

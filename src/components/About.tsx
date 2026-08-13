export function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="about-title">
      <div className="container about__layout">
        <div className="about__title">
          <p className="eyebrow"><span aria-hidden="true" /> Sobre o projeto</p>
          <h2 id="about-title">Um catálogo pensado como experiência.</h2>
        </div>
        <div className="about__copy">
          <p>
            Mundo das Maletas é um estudo de experiência digital, direção visual e desenvolvimento frontend para portfólio. A proposta é transformar imagens ilustrativas em uma navegação clara, acolhedora e responsável.
          </p>
          <p>
            Esta primeira unidade estabelece a identidade, a arquitetura da interface e uma base acessível para evoluções futuras — sem simular uma operação comercial existente.
          </p>
          <div className="about__principles" aria-label="Princípios do projeto">
            <span>Experiência</span>
            <span>Catálogo</span>
            <span>Frontend</span>
          </div>
        </div>
      </div>
    </section>
  )
}

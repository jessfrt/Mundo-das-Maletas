const criteria = [
  {
    number: '01',
    title: 'Duração e objetivo',
    description: 'Comece pelo contexto: uma rotina diária, uma pausa breve ou uma jornada mais longa pedem prioridades diferentes.',
    prompt: 'Qual é o ritmo do seu caminho?',
  },
  {
    number: '02',
    title: 'Tipo de organização',
    description: 'Observe como você prefere separar itens, acessar o essencial e visualizar tudo antes de sair.',
    prompt: 'O que precisa estar sempre à mão?',
  },
  {
    number: '03',
    title: 'Estilo de uso',
    description: 'Considere a linguagem visual que combina com a ocasião: discreta, vibrante, clássica ou descontraída.',
    prompt: 'Que história o objeto ajuda a contar?',
  },
] as const

export function ChoiceGuide() {
  return (
    <section className="section choice-guide" id="guia" aria-labelledby="guide-title">
      <div className="container">
        <div className="guide-intro">
          <p className="eyebrow"><span aria-hidden="true" /> Guia de escolha</p>
          <h2 id="guide-title">Antes da forma,<br />pense no percurso.</h2>
          <p>
            Não existe uma escolha universal. Estes três critérios ajudam a observar necessidades reais sem transformar a experiência em promessa de compra.
          </p>
        </div>

        <ol className="guide-list">
          {criteria.map((criterion) => (
            <li key={criterion.number}>
              <span className="guide-list__number" aria-hidden="true">{criterion.number}</span>
              <div>
                <h3>{criterion.title}</h3>
                <p>{criterion.description}</p>
                <strong>{criterion.prompt}</strong>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

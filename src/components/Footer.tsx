const footerLinks = [
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Guia de escolha', href: '#guia' },
  { label: 'Sobre', href: '#sobre' },
] as const

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__main">
        <a className="brand brand--footer" href="#inicio" aria-label="Voltar ao início">
          <span className="brand__mark" aria-hidden="true">M</span>
          <span className="brand__text">
            <span>Mundo das</span>
            <strong>Maletas</strong>
          </span>
        </a>
        <p className="site-footer__statement">Histórias em movimento.<br />Escolhas com intenção.</p>
        <nav aria-label="Navegação do rodapé">
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="container site-footer__legal">
        <p>© {currentYear} Mundo das Maletas</p>
        <p>Projeto demonstrativo para portfólio. Produtos, preços e disponibilidade são ilustrativos.</p>
      </div>
    </footer>
  )
}

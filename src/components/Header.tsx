import { useEffect, useRef, useState } from 'react'

const navigationItems = [
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Destaques', href: '#destaques' },
  { label: 'Guia de escolha', href: '#guia' },
  { label: 'Sobre o projeto', href: '#sobre' },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" aria-label="Mundo das Maletas — início" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">M</span>
          <span className="brand__text">
            <span>Mundo das</span>
            <strong>Maletas</strong>
          </span>
        </a>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Fechar menu principal' : 'Abrir menu principal'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav className="primary-navigation" aria-label="Navegação principal">
          <ul id="primary-navigation" data-open={isMenuOpen}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

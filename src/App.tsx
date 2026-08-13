import { About } from './components/About'
import { Categories } from './components/Categories'
import { ChoiceGuide } from './components/ChoiceGuide'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InfoBar } from './components/InfoBar'
import { ProductCollection } from './components/ProductCollection'
import { products } from './data/products'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
      <InfoBar />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero primaryProduct={products[2]} secondaryProduct={products[7]} />
        <Categories />
        <ProductCollection products={products} />
        <ChoiceGuide />
        <About />
      </main>
      <Footer />
    </>
  )
}

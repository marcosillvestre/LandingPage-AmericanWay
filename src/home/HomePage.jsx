
import { About, Ebook, FormPage, Header, Metodology, TestEnglish, TestEspanish, TestTech, Unities } from '../pageComponents'
import { Footer } from '../pageComponents/footer/index.jsx'
import Social from '../pageComponents/social/index.jsx'
import { ReportsCarrousel } from '../reactComponents/index.jsx'
import { Container } from './styles.jsx'
function HomePage() {

  return (
    <Container>
      <Header />
      <FormPage />
      <TestEnglish />
      <TestEspanish />
      <TestTech />
      <About />
      <Metodology />
      <ReportsCarrousel />
      <Unities />
      <Ebook />
      <Social />
      <Footer />
    </Container>
  )
}

export default HomePage

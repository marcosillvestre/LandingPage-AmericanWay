
import { About, Ebook, FormPage, Header, Metodology, TestEnglish, TestEspanish, TestTech, Unities } from '../pageComponents'
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
    </Container>
  )
}

export default HomePage

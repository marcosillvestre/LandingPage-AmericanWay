
import { About, FormPage, Header, Metodology, TestEnglish, TestEspanish, TestTech } from '../pageComponents'
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
    </Container>
  )
}

export default HomePage

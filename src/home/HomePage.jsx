
import { About, FormPage, Header, TestEnglish, TestEspanish, TestTech } from '../pageComponents'
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
    </Container>
  )
}

export default HomePage

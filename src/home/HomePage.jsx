
import { FormPage, Header, TestEnglish, TestEspanish } from '../pageComponents'
import { Container } from './styles.jsx'
function HomePage() {

  return (
    <Container>
      <Header />
      <FormPage />
      <TestEnglish />
      <TestEspanish />
    </Container>
  )
}

export default HomePage

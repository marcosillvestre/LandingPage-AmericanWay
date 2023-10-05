
import { Container, Input, Submit } from './styles'
export const Form = () => {
    return (
        <Container>
            <div className='container-inputs'>
                <h2>Cadastre-se e saiba mais</h2>
                <Input placeholder='Nome' type='text' />
                <Input placeholder='Email' type='email' />
                <Input placeholder='Telefone' type='tel' />
                <Submit type='submit' />
            </div>

            <p>Respeitamos a sua privacidade e protege seus dados pessoais
                conforme nossa <a href="">Política de Privacidade </a>
            </p>

        </Container>
    )
}

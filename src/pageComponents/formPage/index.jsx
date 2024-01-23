import logo from '../../assets/blueBackg.svg'
import woman from '../../assets/woman.svg'
import { Form } from '../../reactComponents'
import { Container, Image } from './styles.jsx'

export const FormPage = () => {

    return (
        <Container
            style={{ backgroundImage: `url(${(logo)})` }}>
            <div className='container-text'>
                <h1 className='text-1'>Derrube as</h1>
                <h1 className='text-2'>fronteiras que cercam o</h1>
                <h1 className='text-3'>seu sucesso!</h1>
            </div>


            <Image
                src={woman}
                alt="American Way logo - Mulher sorridente"
            />
            <Form />
        </Container>
    )
}

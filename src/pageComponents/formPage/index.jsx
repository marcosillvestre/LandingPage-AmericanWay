import logo from '../../assets/blueBackg.svg'
// import woman from '../../assets/woman.svg'
import { Form } from '../../reactComponents'
import { Container, Image } from './styles.jsx'

const woman = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/woman.svg"

export const FormPage = () => {

    return (
        <Container
            style={{ backgroundImage: `url(${(logo)})` }}
            id='form'
        >



            <div className='container-text'>
                <h1>Derrube as</h1>
                <h1>fronteiras que cercam o</h1>
                <h1>seu sucesso!</h1>
            </div>

            <picture>
                <source srcSet={woman} />
                <Image
                    loading='lazy'
                    alt="American Way logo - Mulher sorridente"
                />

            </picture>

            <Form />
        </Container>
    )
}

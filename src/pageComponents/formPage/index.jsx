import logo from '../../assets/blueBackg.svg'
import woman from '../../assets/woman.svg'
import { Form } from '../../reactComponents'
import { Container, Image } from './styles.jsx'

const womanNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/woman.svg"
const logoNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/blueBackg.svg"

export const FormPage = () => {

    return (
        <Container
            style={{ backgroundImage: `url(${(logo ? logo : logoNet)})` }}
            id='form'
        >

            <div className='container-text'>
                <h1>Derrube as</h1>
                <h1>fronteiras que cercam</h1>
                <h1>o seu sucesso!</h1>
            </div>

            <picture>
                <source media='(max-width:990px)' srcSet={woman ? woman : womanNet} />
                <source media='(min-width:990px)' srcSet={womanNet} />
                <Image
                    loading='lazy'
                    alt="American Way logo - Mulher sorridente"
                />
            </picture>

            <Form />
        </Container>
    )
}

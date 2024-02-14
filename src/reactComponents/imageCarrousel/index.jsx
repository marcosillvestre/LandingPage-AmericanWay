
import st from '../../assets/1st.svg'
import st2 from '../../assets/2st.svg'
import st3 from '../../assets/3st.svg'
import st4 from '../../assets/4st.svg'
import { Container, Image } from './styles.jsx'

export const ImageCarrousel = () => {

    return (
        <Container>
            <div>
                <Image src={st} alt="carousel image 1" loading='lazy' className='item' />

                <Image src={st2} alt="carousel image 2" loading='lazy' className='item' />
                <Image src={st3} alt="carousel image 3" loading='lazy' className='item' />

                <Image src={st4} alt="carousel image 4" loading='lazy' className='item' />
            </div>
        </Container>
    )
}

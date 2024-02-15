
import st from '../../assets/1st.svg'
import st2 from '../../assets/2st.svg'
import st3 from '../../assets/3st.svg'
import st4 from '../../assets/4st.svg'
import { Container, Image } from './styles.jsx'

const stNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/1st.svg"
const st2Net = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/2st.svg"
const st3Net = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/3st.svg"
const st4Net = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/4st.svg"

export const ImageCarrousel = () => {

    return (
        <Container>
            <div>

                <picture>
                    <source media="(max-width: 990px)" srcSet={st} />
                    <source media="(min-width: 990px)" srcSet={stNet} />
                    <Image
                        loading='lazy'
                        src={st}
                        alt="carousel image 1"
                        className='item'
                    />
                </picture>

                <picture>
                    <source media="(max-width: 990px)" srcSet={st2} />
                    <source media="(min-width: 990px)" srcSet={st2Net} />
                    <Image
                        loading='lazy'
                        src={st2}
                        alt="carousel image 2"
                        className='item'
                    />
                </picture>
                <picture>
                    <source media="(max-width: 990px)" srcSet={st3} />
                    <source media="(min-width: 990px)" srcSet={st3Net} />
                    <Image
                        loading='lazy'
                        src={st3}
                        alt="carousel image 3"
                        className='item'
                    />
                </picture>

                <picture>
                    <source media="(max-width: 990px)" srcSet={st4} />
                    <source media="(min-width: 990px)" srcSet={st4Net} />
                    <Image
                        alt="carousel image 4"
                        loading='lazy'
                        className='item'
                    />
                </picture>
            </div>
        </Container>
    )
}

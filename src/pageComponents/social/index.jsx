
import logo from '../../assets/blueBackg.svg';
import { Container, Image, Main } from './styles';

import social from '../../services/socialMedia.jsx';

const Social = () => {


    return (
        <Container
            style={{
                backgroundImage: `url(${(logo)})`,
                backgroundSize: 'cover'
            }}
        >
            <Main>
                <h1 >Nossas redes sociais</h1>
                <h2>conheça mais sobre a American Way</h2>

                <div className='container'>
                    {
                        social.map(res => (
                            <div
                                key={res.id}
                                className='icon'
                            >
                                <a href={res.link}>
                                    <Image src={res.image} />
                                </a>

                            </div>

                        ))
                    }
                </div>
            </Main>


        </Container>
    )
}

export default Social
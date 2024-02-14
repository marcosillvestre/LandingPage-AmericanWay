
import logo from '../../assets/blueBackg.svg';
import { Container, Image, Section } from './styles';

import social from '../../services/socialMedia.jsx';

const Social = () => {


    return (
        <Container
            style={{
                backgroundImage: `url(${(logo)})`,
                backgroundSize: 'cover'
            }}
        >
            <Section>
                <h1 >Nossas redes sociais</h1>
                <h2>conheça mais sobre a American Way</h2>

                <div className='container'>
                    {
                        social.map(res => (
                            <a
                                key={res.id}
                                className='icon'
                                href={res.link}
                            >

                                <Image
                                    style={{ backgroundColor: res.color }}
                                >
                                    <img src={res.image} alt="" />
                                </Image>

                            </a>

                        ))
                    }
                </div>
            </Section>


        </Container>
    )
}

export default Social
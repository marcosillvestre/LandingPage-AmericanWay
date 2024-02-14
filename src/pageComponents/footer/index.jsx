import copy from '../../assets/copy.svg'
import faceb from '../../assets/faceb.svg'
import insta from '../../assets/insta.svg'
import ytb from '../../assets/ytb.svg'

import { Container, Image } from './styles.jsx'

export const Footer = () => {

    return (
        <Container>
            <picture>
                <source srcSet={copy} />
                <Image />
            </picture>

            <div className='links'>
                <h3>Metodologia</h3>
                <a href="#">Cursos online</a>
                <a href="#english">Cursos de inglês</a>
                <a href="#spanish">Cursos de espanhol</a>
                <a href="#tecnologie">Cursos de informática</a>
                <a href="#">Aula experimental</a>
                <a href="#ebook">Ebook de inglês</a>
                <a href="#">Teste seu inglês</a>
                <a href="#">Teste seu espanhol</a>
            </div>

            <div className='links'>
                <h3>Institucional</h3>
                <a href="#">Quem somos</a>
                <a href="#unities">Unidades</a>
                <a href="#social-media">Fale conosco</a>
                <a href="#">Parcerias</a>
                <a href="#carousel">Depoimentos</a>
                <a href="#">Dicas de inglês</a>
                <a href="#">Termos de privacidade</a>
            </div>

            <div className='links social'>
                <h3>Acompanhe a gente</h3>
                <p>nas nossas redes sociais</p>

                <div>
                    <picture>
                        <source srcSet={insta} />
                        <img alt="instagram - logo" />
                    </picture>
                    <picture>
                        <source srcSet={ytb} />
                        <img alt="youtube - logo" />
                    </picture>
                    <picture>
                        <source srcSet={faceb} />
                        <img alt="facebook - logo" />
                    </picture>
                </div>

                <p>@americanwayofficial</p>
            </div>
        </Container>

    )
}

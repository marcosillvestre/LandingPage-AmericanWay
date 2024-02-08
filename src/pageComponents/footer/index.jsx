import copy from '../../assets/copy.svg'
import faceb from '../../assets/faceb.svg'
import insta from '../../assets/insta.svg'
import ytb from '../../assets/ytb.svg'

import { Container, Image } from './styles.jsx'

export const Footer = () => {

    return (
        <Container>

            <Image src={copy} />

            <div className='links'>
                <h3>Metodologia</h3>
                <a href="#">Cursos de inglês</a>
                <a href="#">Cursos online</a>
                <a href="#">Cursos de espanhol</a>
                <a href="#">Cursos de informática</a>
                <a href="#">Aula experimental</a>
                <a href="#">Ebook de inglês</a>
                <a href="#">Teste seu inglês</a>
                <a href="#">Teste seu inglês</a>
            </div>

            <div className='links'>
                <h3>Institucional</h3>
                <a href="#">Quem somos</a>
                <a href="#">Unidades</a>
                <a href="#">Fale conosco</a>
                <a href="#">Parcerias</a>
                <a href="#">Depoimentos</a>
                <a href="#">Dicas de inglês</a>
                <a href="#">Termos de privacidade</a>
            </div>

            <div className='links social'>
                <h3>Acompanhe a gente</h3>
                <p>nas nossas redes sociais</p>
                <div>
                    <a href="*"> <img src={insta} alt="" /></a>
                    <a href="*"> <img src={ytb} alt="" /></a>
                    <a href="*"> <img src={faceb} alt="" /></a>
                </div>

                <p>@americanwayofficial</p>
            </div>
        </Container>

    )
}

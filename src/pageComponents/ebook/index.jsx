import ebook from '../../assets/ebook1.svg'
import library from '../../assets/library.svg'
import { Container, DownloadEbook, Section } from './styles'

const ebookNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/ebook1.svg"
const libraryNet = "https://ik.imagekit.io/khqnnhktw/landing-page/assets/library.svg"

export const Ebook = () => {
    return (
        <Container style={{ backgroundImage: `url(${(ebookNet ? ebookNet : ebook)})` }} id='ebook'>
            <Section>
                <h1 >Ebook gratuito</h1>
                <h4>baixe seu ebook de inglês</h4>

                <div className='container-article'>
                    <article>
                        <p>
                            Aprenda mais de 100 frases que você precisa
                            saber para se comunicar bem em Inglês.
                            <br />
                            <br />
                            Nesse ebook separamos as frases mais usadas no dia a dia,
                            além de expressões e jogos para enriquecer ainda mais o seu vocabulário.
                            <br />
                            <br />
                            Receba o seu gratuitamente clicando no botão.
                        </p>
                    </article>

                    <DownloadEbook href="">
                        Baixar ebook
                    </DownloadEbook>

                </div>

                <picture>
                    <source media="(max-width:990px)" srcSet={library} />
                    <source media="(min-width:990px)" srcSet={libraryNet} />

                    <img
                        loading='lazy'
                        alt="Book - ebook de própria autoria da escola"
                    />
                </picture>

            </Section>


        </Container>
    )
}

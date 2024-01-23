import book from '../../assets/book.svg'
import ebook from '../../assets/ebook1.svg'
import { Container, DownloadEbook, Section } from './styles'


export const Ebook = () => {
    return (
        <Container style={{ backgroundImage: `url(${(ebook)})` }}>
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

                    <DownloadEbook>
                        <a href="" >
                            Baixar ebook
                        </a>
                    </DownloadEbook>
                </div>

                <img src={book} alt="Book - ebook de própria autoria da escola" />

            </Section>


        </Container>
    )
}

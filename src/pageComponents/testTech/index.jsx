import tech from '../../assets/tech.svg'
import { Container, DivButton, Main } from './styles'

export const TestTech = () => {
    return (
        <Container >

            <Main>
                <article>
                    <h1>Curso de Tecnologia</h1>
                    <span>
                        <DivButton>presencial</DivButton>
                    </span>
                    <p>
                        Acompanhando o mercado de trabalho, adaptamos a nossa metodologia dinâmica com a complexidade dos softwares de computadores.
                        <br />
                        <br />
                        Desenvolvemos um método que integra as peculiaridades dos sistemas com situações práticas do cotidiano, facilitando o aprendizado e reduzindo o tempo de curso.
                        <br />
                        <br />
                        Dentro de sala, o nosso objetivo é ir além da teoria básica com exercícios baseados em contextos reais dentro de um ambiente corporativo, softwares atualizados e provas que desfiam os alunos.
                    </p>
                </article>

                <img src={tech} alt="American Way Logo" className='tech' />

            </Main>


        </Container>
    )
}

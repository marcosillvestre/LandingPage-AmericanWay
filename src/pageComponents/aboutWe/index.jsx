import bg from '../../assets/bg.svg'
import { Container, Section } from './styles'

export const About = () => {
    return (
        <Container style={{ backgroundImage: `url(${(bg)})` }}>
            <Section>

                <h1> Quem somos ? </h1>
                <p>
                    Nascemos em 2013 com o sonho de tornar o ensino de idiomas
                    acessível e viável para as pessoas, quebrando o tabu do
                    “verbo to be” através de uma metodologia dinâmica e exclusiva.
                    <br />
                    <br />

                    Crescemos com o objetivo de transformar vidas
                    acompanhando o aluno a cada passo, garantindo
                    o seu desenvolvimento e sucesso.
                    <br />
                    <br />

                    Somos uma instituição motivada por sonhos e que
                    incentiva os alunos a acreditarem em si mesmos.
                    Buscamos quebrar a barreira linguística, transformando
                    o idioma em uma ponte para um mundo novo de oportunidades
                    e experiências inesquecíveis.
                    <br />
                    <br />
                </p>

            </Section>


        </Container>
    )
}

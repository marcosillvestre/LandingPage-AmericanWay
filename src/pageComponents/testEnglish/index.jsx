import city from '../../assets/city.svg'
import watch from '../../assets/womanw.svg'
import { ImageCarrousel } from '../../reactComponents'
// import Carrousel from '../../reactComponents/carrousel'
import { Container, DivButton, Main } from './styles'

export const TestEnglish = () => {
    return (
        <Container id='english'>
            <header>
                <div className='parag'>
                    <h2> Quer <strong>testar</strong> seu <br />
                        <strong>Inglês?</strong>
                    </h2>
                </div>

                <p>Com menos de 5 minutos você pode descobrir o seu nível gratuitamente</p>

                <DivButton className='test' button>
                    Iniciar teste
                </DivButton>
            </header>

            <Main>
                <article>
                    <h1>Curso de Inglês</h1>
                    <span>
                        <DivButton>presencial</DivButton>
                        <DivButton>online</DivButton>
                    </span>
                    <p>
                        Estimulando a conversação desde o primeiro dia, nosso método foca na prática e interação entre os alunos. Dentro da sala de aula, nosso objetivo é fazer com que o aluno se sinta nos Estados Unidos e se desprenda das traduções, aprendendo por meio de associações e contextos do dia a dia.
                        <br />
                        <br />
                        Dessa forma, a diversão também otimiza o tempo de aprendizado, tornando o processo de aprendizado mais leve.
                    </p>
                </article>

                <img
                    src={city}
                    alt="American Way City -  Ponte da cidade de San francisco"
                    className='city'
                    loading='lazy'
                />

                <img
                    src={watch}
                    alt="American Way Logo - Mulher sorridente lendo livro em Inglês"
                    className='watch'
                    loading='lazy'
                />

            </Main>

            <ImageCarrousel />

        </Container>
    )
}

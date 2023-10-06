import bman from '../../assets/bman.svg'
import city2 from '../../assets/city2.svg'
import { Container, DivButton, Main } from './styles'

export const TestEspanish = () => {
    return (
        <Container >
            <Main>
                <img src={bman} alt="American Way Logo" className='bman' loading='lazy' />
                <img src={city2} alt="American Way Logo" className='city2' loading='lazy' />

                <aside>
                    <h1>Curso de Espanhol</h1>
                    <span>
                        <DivButton>presencial</DivButton>
                        <DivButton>online</DivButton>
                    </span>
                    <p>
                        Junto às aulas focadas na conversação e interação entre os alunos, a nossa metodologia reúne o vocabulário de diversos países hispanohablantes.
                        <br />
                        <br />

                        Dentro da sala de aula, deixamos o português de lado e ensinamos por meio de associações e contextualizações que permitem ao aluno obter resultados incríveis em um curto período de tempo.
                    </p>
                </aside>
            </Main>

            <header>
                <div className='parag'>
                    <h2> Quer <strong>testar</strong> seu <br />
                        <strong>Espanhol?</strong>
                    </h2>
                </div>

                <p>Com menos de 5 minutos você pode descobrir o seu nível gratuitamente</p>

                <DivButton className='test' button>
                    Iniciar teste
                </DivButton>
            </header>

        </Container>
    )
}

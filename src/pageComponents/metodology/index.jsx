import hearth from '../../assets/hearth.svg'
import methods from '../../services/metodology'
import { Container, Hearths, Section } from './styles'

export const Metodology = () => {
    return (
        <Container>
            <Section>
                <div>
                    <span>
                        <h1> Metodologia </h1>
                        <h2>American Way</h2>
                    </span>

                    <p>Entendemos que aprender um 2º idioma pode ser
                        um desafio e até mesmo uma barreira, por esse
                        motivo desenvolvemos um método com o objetivo
                        de tornar o aprendizado o mais natural possível,
                        incorporando atividades cotidianas, hobbies,
                        jogos e séries nos cursos de idiomas e tecnologia.
                        <br />
                        <br />
                        Com nosso foco na conversação e prática,
                        oferecemos uma experiência de aprendizado
                        interativa. Além disso, contamos com a nossa
                        equipe de suporte pedagógico para acompanhar
                        você em todo o processo. O seu sucesso é
                        nossa maior conquista e prioridade!
                    </p>

                </div>
            </Section>

            <div className='nav-boxes'>
                {
                    methods.map(res => (
                        <span key={res.id}>
                            <img src={res.img} alt={res.alt} />
                            <hr />
                            <h2>{res.text}</h2>
                        </span>

                    ))
                }


            </div>
            <Hearths
                src={hearth}
                alt="American way logo - Imagem de corações meramente ilustrativa"
                loading='lazy'
                className='hearth' />

        </Container>
    )
}

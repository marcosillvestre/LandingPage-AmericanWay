
import unities from '../../services/unities.jsx'
import { ButtonLink, Container, MapContainer } from './styles'

export const Unities = () => {


    return (
        <Container>
            <h1>Unidades</h1>

            <span>
                {
                    unities.map(res => (
                        <MapContainer key={res.unity} >

                            <div>
                                <p >
                                    Unidade no {res.unity}
                                </p>
                                <iframe src={res.iframe} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                                <p>Contato:</p>
                                <p>{res.contact}</p>
                            </div>

                            <ButtonLink
                                href={res.link}
                                target='_blank'
                            >
                                Ver no mapa
                            </ButtonLink>
                        </MapContainer>
                    ))

                }
            </span>
        </Container>
    )
}

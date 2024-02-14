import React from 'react'
import aw from '../../assets/aw.svg'
import { AnchorMobileList, Container, ListAnchor, Logo, MobileNavigation, Navigation, Wrapper } from './styles.jsx'


export const Header = () => {
    let [bool, setBool] = React.useState(true)

    return (
        <Container id='home'>

            <Navigation >
                <ListAnchor >
                    <a href="">Sobre</a>

                    <a href="">Cursos</a>
                    <a href="">Teste seu inglês</a>

                    <Wrapper $clicked={bool}>
                        <picture>
                            <source srcSet={aw} />
                            <Logo
                                alt="American Way - logo"
                                loading='lazy' />
                        </picture>
                    </Wrapper>


                    <a href="">Online</a>
                    <a href="">Unidades</a>
                    <a href="">Fale Conosco</a>

                </ListAnchor>
            </Navigation>


            <MobileNavigation $clicked={bool}>
                <div>
                </div>

                <Wrapper >
                    <picture>
                        <source srcSet={aw} />
                        <Logo alt="American Way - logo" loading='lazy' />
                    </picture>
                </Wrapper>

                <div
                    onClick={() => setBool(!bool)}
                >
                    <div className='menu-toogle'>
                        <div className='one'></div>
                        <div className='two'></div>
                        <div className='three'></div>
                    </div>

                    <AnchorMobileList $clicked={bool}>
                        <div>
                            <a href="">Sobre</a>
                            <a href="">Cursos</a>
                            <a href="">Teste seu inglês</a>
                            <a href="">Online</a>
                            <a href="">Unidades</a>
                            <a href="">Fale Conosco</a>
                        </div>
                    </AnchorMobileList>
                </div>
            </MobileNavigation>



        </Container>
    )

}

import React from 'react'
import aw from '../../assets/aw.svg'
import { AnchorMobileList, Container, ListAnchor, Logo, MobileNavigation, Navigation, Wrapper } from './styles.jsx'


export const Header = () => {
    let [bool, setBool] = React.useState(true)

    return (
        <Container id='home'>

            <Navigation >
                <ListAnchor >
                    <a href="#about">Sobre</a>

                    <a href="">Cursos</a>
                    <a href="#english">Teste seu inglês</a>

                    <Wrapper $clicked={bool}>
                        <picture>
                            <source srcSet={aw} />
                            <Logo
                                loading='lazy'
                                alt="American Way - logo"
                            />
                        </picture>
                    </Wrapper>


                    <a href="">Online</a>
                    <a href="#unities">Unidades</a>
                    <a href="#socia-media">Fale Conosco</a>

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
                            <a href="#about">Sobre</a>
                            <a href="">Cursos</a>
                            <a href="#english">Teste seu inglês</a>
                            <a href="">Online</a>
                            <a href="#unities">Unidades</a>
                            <a href="#social-media">Fale Conosco</a>
                        </div>
                    </AnchorMobileList>
                </div>
            </MobileNavigation>



        </Container>
    )

}

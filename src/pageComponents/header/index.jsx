import React from 'react'
import aw from '../../assets/aws.svg'
import { Container, Logo, Wrapper } from './styles.jsx'


export const Header = () => {
    let [bool, setBool] = React.useState(true)
    const classeCSS = bool ? '' : 'on'

    return (
        <Container clicked={bool}>
            <nav>
                <ul>
                    <a href="">Sobre</a>

                    <a href="">Cursos</a>
                    <a href="">Teste seu inglês</a>

                    <Wrapper clicked={bool}>
                        <Logo src={aw} alt="American Way - logo" />
                    </Wrapper>


                    <a href="">Online</a>
                    <a href="">Unidades</a>
                    <a href="">Fale Conosco</a>

                </ul>
                <div className='menu-section' onClick={() => setBool(!bool)}>
                    <div className={classeCSS}>
                        <div className='menu-toogle'>
                            <div className='one'></div>
                            <div className='two'></div>
                            <div className='three'></div>
                        </div>
                    </div>
                </div>
            </nav>
        </Container>
    )
}

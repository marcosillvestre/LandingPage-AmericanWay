import styled, { keyframes } from 'styled-components'

const openAnimation = keyframes`
from {
    height: 65px;
}

to {
    height: 100vh;
    
}
`
const closeAnimation = keyframes`
from {
    height: 100vh;
}

to {
    height: 65px;
}
`


export const Container = styled.header`
width: 100vw;
transition: all.7s;
height: 12rem;

@media (max-width: 768px) {
    animation: ${({ $clicked }) => ($clicked ? closeAnimation : openAnimation)} 1s ease-in-out forwards;
    }
nav > ul{
    display: flex;
    justify-content: space-around;
    padding: 4rem 0 3rem 0;
        }

    .menu-toogle{
    display: none;
    width: 40px;
    height: 30px ;
    margin: 7px 5px 0 0;
        .one,
        .two, 
        .three{
            background-color: #222;
            height: 4px;
            width: 30px;
            margin: 5px auto;
            color: green;
            transition-duration: .4s;
    }
}
nav > ul > a{
    z-index: 1;
    text-decoration: none ;
    font-weight: bolder;
    color:#222;
    cursor: pointer;
    font-size: 2.7em;

}
@media (max-width: 1600px) {
        padding: .3rem ;
    }

    @media (max-width: 768px) {
        nav > ul{
    display: grid;
    margin: 23rem auto;
    font-size: 2rem;
    text-align: center;

a{
    z-index: 1;
    transform-origin: top;
    transition: all.2s;
    line-height: 8rem;
    text-transform: uppercase;
&:active{
    background-color: #ffffff4c;
}
}
}
.menu-toogle{
display: block;
position: absolute;
top: 3rem;
right: 20px;
cursor: pointer;
            .one{
        transform: ${props => props.$clicked ? "" : "rotate(45deg) translate(-7px,2px)"} ;
            }
            .two{ 
                opacity: ${props => props.$clicked ? "1" : "0"};
                
            } 
            .three{
        transform: ${props => props.$clicked ? "" : "rotate(-45deg) translate(10px,-21px)"} ;
            }

}
    .on{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 100;
        transition: all.2s;

    }
    
}


`

export const Wrapper = styled.div`
    background-color: #fff;
    border-radius: 50%;
    height: 14rem;
    width: 21rem;
    display: flex;
    justify-content: center;
    z-index: 1000;
    @media (max-width: 768px) {
        width: 17rem;
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    `

export const Logo = styled.img`
    height: 10rem;
    width: 16rem;
    translate: 0 25%;
    @media (max-width: 768px) {
        width: 13rem;
        
    }

`
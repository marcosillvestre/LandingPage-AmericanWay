import styled from 'styled-components'

export const Container = styled.main`
height: 100vh;
display: flex;
flex-direction: column;

header{
    display: flex;
    justify-content: space-around;
    color: #f14477;
    background-color:#f8f8f8;
    padding: 1rem 1.5rem;
    align-items: center;
    height: 10rem;
    z-index: 1;
    p{
        font-size: 1.8rem;
        width: 70%;
        padding: 1rem 1.4rem;
        text-align: center;
    }
    .parag{
        width: 26rem;
        border-right: .12rem solid #737373;
        font-size: 2rem;
        

        @media (max-width: 750px) {
            font-size: 1.4rem;
            
    }
    }
    .test{
        &:hover{
            background-color: #fff;
            color: #f14477;
            transition: 0.3s ease-in-out;
        }
    }
}
`

export const DivButton = styled.div`
padding: ${props => props.button ? "1.4rem 3rem" : "0.3rem 2rem"};
font-size: ${props => props.button ? "1.8rem" : "2rem"};
color: #fff;
font-weight: 600;
background-color: #f14477;
border-radius: 0.8rem;
cursor: pointer;
text-align: center;
`

export const Main = styled.main`
display: flex;

aside{
    position: absolute;
    margin: 8rem 0 auto 5rem;
    display: grid;
    gap: 2rem;
    font-size: 1.9rem;
}
aside > span {
    display: flex;
}
aside > p {
    width: 34rem;
}
aside > h1 {
    font-size: 2.8rem;
}
.watch{
object-fit: contain;
mix-blend-mode: color-burn;
translate: -59.99rem 0;
position: absolute;
right: -60rem;
z-index: -1;
/* height: 90rem; */

@media(max-width: 1200px){
    height: 70rem;
    translate: -58rem -5rem;
}
@media(max-width: 860px){
    height: 40rem;
    /* translate: -rem 8rem; */
    margin-top: 17rem;
}
}
.city{
    translate: -4rem 5rem;
    @media(max-width: 860px){
        height: 50rem;
        translate: -4rem 40rem;
}
    @media(max-width: 280px){
visibility: hidden;
}
}

`
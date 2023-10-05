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
    padding: 1rem 1.7rem 2rem 0 ;
    align-items: center;
    height: 13rem;
    z-index: 1;



    p{
        font-size: 3.2rem;
        width: 70%;
        padding: 1rem 1.4rem;
        text-align: center;
    }
    .parag{
        width: 40rem;
        display: flex;
        justify-content: center;
        border-right: .12rem solid #737373;
        font-size: 2rem;
    }
    .test{
        &:hover{
            background-color: #fff;
            color: #f14477;
            transition: 0.2s ;
        }
    }
        @media (max-width: 750px) {
    font-size: 1.4rem;      
        p{
        font-size: 2rem;
    }
    .parag{
        width: 26rem;
        font-size: 1.5rem;

        }
    }
}
`

export const DivButton = styled.div`
padding: ${props => props.button ? "2.3rem 3rem" : "0.3rem 2rem"};
width: ${props => props.button ? "20%" : "50%"};
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
justify-content: space-between;

aside{
    margin: 8rem 0 auto 7rem;
    display: grid;
    gap: 2rem;
    font-size: 1.9rem;
    width: 50rem;
}
aside > span {
    display: flex;
}
aside > p {
    width: 100%;
}
aside > h1 {
    font-size: 2.8rem;
}

       

/* .watch{
object-fit: contain;
mix-blend-mode: color-burn;
translate: -59.99rem 0;
position: absolute;
right: -60rem;
z-index: -1;

@media(max-width: 1200px){
    height: 70rem;
    translate: -58rem -5rem;
}
@media(max-width: 860px){
    height: 40rem;
    margin-top: 17rem;
}
} */

/* .city{
    translate: -4rem 5rem;
    @media(max-width: 860px){
        height: 50rem;
        translate: -4rem 40rem;
}
    @media(max-width: 280px){
visibility: hidden;
}
} */

 .city{
    position: absolute;
 }
 .watch{
    translate: 2rem 0;
 }
 @media (max-width: 750px) {
    flex-direction: column;
    aside{
    width: 100vw;
    padding: 0 15rem 0 0 ;

    }
     .city{
  display: none;
 }
        }
`
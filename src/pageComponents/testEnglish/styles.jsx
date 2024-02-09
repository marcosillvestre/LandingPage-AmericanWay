import styled from 'styled-components'

export const Container = styled.main`
display: flex;
flex-direction: column;

header{
display: flex;
justify-content: space-around;
color: #f14477;
background-color:#f8f8f8;
padding: 3rem 1.7rem 3rem 0 ;
align-items: center;
height: 16rem;
z-index: 1;

p{
font-size: 3.3rem;
width: 70%;
padding: 1rem 1.4rem;
text-align: center;
}
.parag{
width: 40rem;
display: flex;
justify-content: center;
border-right: .12rem solid #737373;
font-size: 2.5rem;
}
.test{
&:hover{
    background-color: #fff;
    color: #f14477;
    transition: 0.2s ;
}
}
@media (max-width: 990px) {
height: 13rem;
font-size: 1.7rem;
p{
font-size: 1.6rem;
}
.parag{
width: 26rem;
font-size: 1.4rem;
strong{
    font-size: 2.2rem;
}
}
}
}
`

export const DivButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
height:6rem;
width: ${props => props.button ? "20%" : "50%"};
font-size: ${props => props.button ? "2.8rem" : "2rem"};
color: #fff;
font-weight: 600;
background-color: #f14477;
border-radius: 0.8rem;
cursor: pointer;
@media (max-width: 750px) {
height: ${props => props.button ? "6rem" : "3rem"};
width: ${props => props.button ? "35%" : "50%"};
font-size: ${props => props.button ? "1.9rem" : "2rem"};

}

`

export const Main = styled.main`
display: flex;
justify-content: space-between;

article{
margin: 8rem 0 auto 7rem;
display: grid;
gap: 2rem;
font-size: 3rem;
width: 70rem;
text-align: justify;
span {
display: flex;
gap: 1rem;
}
p {
width: 100%;
}
h1 {
font-size: 3.8rem;
}
}

.city{
position: absolute;
translate: 10rem 30rem;
}
.watch{
translate: 3rem 0;
height: max-content;
}

@media (max-width: 1500px) {
    .city{
        display: none;
    }
    .watch{
        translate: 3rem 0;
        height: 90vh;
}
}
@media (max-width: 990px) {
flex-direction: column;
article{
margin: initial;
width: 100vw;
padding: 5rem 7rem;
justify-content: center;
font-size: 2.9rem;
h1{
text-align: center;
}
}
.watch{
width: max-content;
margin: 0 auto;
height: 100rem;
}
}
`
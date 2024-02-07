import styled from 'styled-components'

export const Container = styled.section`
display: flex;
flex-direction: column;

header{
display: flex;
justify-content: space-around;
color: #ff6100;
background-color:#f8f8f8;
padding: 3rem 1.7rem 3rem 0 ;
align-items: center;
height: 16rem;
z-index: 10;
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
color:#ff6100;
transition: 0.2s ;
}
}
@media (max-width: 750px) {
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
height: 6rem;
width: ${props => props.button ? "20%" : "50%"};
font-size: ${props => props.button ? "2.8rem" : "2rem"};
color: #fff;
font-weight: 600;
background-color: #ff6100;
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
flex-direction: column;

article{  
margin: 4rem 15rem 30rem 0;
position: absolute;
right: 0;

display: grid;
gap: 2rem;
width: 70rem;

h1 {
font-size: 3.8rem;
}

span {
display: flex;
gap: 1rem;
}

p {
font-size: 3rem;
width: 100%;
}
}


.bman{
z-index: 10;
width: max-content;
height: max-content;

}
.city2{
transform: scaleX(-1);
width: max-content;
height: 60rem;

position: absolute;
right: 0;
margin-top: 40rem;

}

@media (max-width: 1500px) {
/* flex-direction: column; */
/* align-items: center; */
justify-content: center;
article{  
    margin-top: 5rem;
    order: -1;
    position: absolute;
    
}
.city2{
display: none;
}
.bman{
height: min-content;
width: 60vw;
}
}

@media (max-width: 1215px) {

article{
margin: 0 7rem 0 0;
padding: 5rem 7rem ;
justify-content: center;
font-size: 2.9rem;
text-align: justify;

h1{
text-align: center;
}
}
}


 @media (max-width: 990px) {
    flex-direction: column;
    article{
margin: initial;
width: 100vw;
padding: 5rem 7rem  ;
justify-content: center;
font-size: 2.9rem;
text-align: justify;
position: relative;

h1{
    text-align: center;
}
    }
article > span {
justify-content: center;
text-align: center;
}
.bman{
    z-index: 10;
    width: max-content;
    margin: 0 auto;
height: 100rem;

    }
        }

///////////////////////////////////////////////
`
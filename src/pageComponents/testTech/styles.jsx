import styled from 'styled-components'

export const Container = styled.main`
height: 110.1vh;
`

export const DivButton = styled.div`
color: #fff;
font-weight: 600;
background-color:#8c52ff;

height: 3rem;
width: 50%;
font-size: 2rem;

border-radius: .8rem;
text-align: center;
`

export const Main = styled.aside`
display: flex;
justify-content: space-between;


article{
    margin: 8rem 0 auto 7rem;
    display: grid;
    gap: 2rem;
    font-size: 1.9rem;
    width: 50rem;
}
article > span {
    display: flex;
    gap: 1rem;
}
article > p {
    width: 100%;
}
article > h1 {
    font-size: 2.8rem;
}

 @media (max-width: 750px) {
    flex-direction: column;
    article{
    margin: unset;
    width: 100vw;
    padding: 5rem  ;
    justify-content: center;
h1{
    text-align: center;
}
    }
article > span {
justify-content: center;
text-align: center;
}
        }

.tech{
    z-index: 10;
    height: 90vh;
/* object-fit: contain; */
/* aspect-ratio: 3/3.9; */
/* @media(max-width: 1600px){
    aspect-ratio: 4/3.1;
    translate: 36rem 10rem;
} */
}
 @media (max-width: 750px) {

    .tech{
    z-index: 10;
    height: 41vh;
    margin: -3.2rem 0 0 0;
    }
 }

`
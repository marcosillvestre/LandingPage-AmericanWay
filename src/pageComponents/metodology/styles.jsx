import styled from 'styled-components'

export const Container = styled.main`
background-color: #007dff;
padding: 10rem 15rem;

display: flex;
flex-direction: column;
justify-content: center; 
align-items: center; 
overflow: hidden;


.nav-boxes{
width: 100vw;
padding: 10% 25%;
display: grid;
gap: 6rem;
grid-template-columns: 
repeat(auto-fit, minmax(250px, 3fr));
z-index: 1;
span{
background-color: #f5f5f5;
padding: 4rem 3rem;
text-align: center;
border-radius: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
font-size: 1.8rem;
hr{
    width: 80%;
}
img{
    width: 30rem;
    height: 35rem;
}
}

}
@media (max-width: 990px) {
padding: 10rem 0rem;

    .nav-boxes{
    gap: 1rem;
    width: initial;
    padding: 0px 8rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 3fr));
        span{
            padding: 2rem .7rem;
            font-size: 1.8rem;
img{
    width: 20rem;
    height: 15rem;
}
}
}
}


`

export const Hearths = styled.picture`
    z-index: 0;
    height: 50rem;
    width: auto;
    translate: -5rem 0rem;
    position: absolute;
@media (max-width: 1500px) {
    /* position: relative; */
    translate: 0;
}

 @media (max-width: 990px) {
    display: none;
  }
`

export const Section = styled.section`
    z-index: 1;

    display: grid;
    text-align: center;
    gap: 5rem;
    z-index: 1000;
    border-radius: 2rem;
    padding: 5rem 8rem;
    color: #fff;
    p{
        font-size: 3rem;
    }
    span {
    text-align: center;

    h1 {
    font-size: 5.8rem;
    }

    h2 {
    font-size: 3.8rem;
    }

}

@media (max-width: 750px) {
    text-align: justify;
    font-size: 2.4rem;
}

`
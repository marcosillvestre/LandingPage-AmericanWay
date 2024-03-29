import styled from 'styled-components'

export const Container = styled.section`
height: 110vh;
width: 110%;
background-repeat: no-repeat;
background-size: cover;
translate:  -1.78% 0;

@media (max-width: 990px) { 
    background-position: center;
    translate: 0 3%;
    display: flex;
    align-items: center;
    }
`

export const Section = styled.section`
    background-color: #007dff;
    margin: 5rem 0 0rem 20rem;
    border-radius: 4rem;
    color: #fff;
    width: 81rem;
    display: flex;
    flex-direction: column;
    padding: 7rem 5rem 2rem 5rem;
    p{
        font-size: 3rem;
    }
    h1{
        font-size: 3.8rem;
    }
    
    @media (max-width: 750px) { 
    gap: 2rem;
    padding: 5rem 3rem 2rem ;
    background-color: #007dff;
    border-radius: 4rem;
    font-size: 2.4rem;
    margin:  20rem auto;
    width: 75vw;
    p{
        text-align: justify;
        width: 100%;
    }
}
`
